# Telegram Caption Formatting Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Preserve event-description structure and supported formatting in Telegram photo captions, including captions truncated to 1024 characters.

**Architecture:** Keep Telegram transport unchanged. Convert Markdown and embedded HTML into Telegram-safe HTML in `scripts/utils/string.py`, add an HTML-aware truncation helper there, and make `Event.generate_telegram_message()` compose and truncate the complete caption with those helpers.

**Tech Stack:** Python 3.12, Python-Markdown, Beautiful Soup 4, standard-library `unittest`.

## Global Constraints

- Keep the existing `sendPhoto` and `parse_mode="HTML"` notification flow.
- Do not change event MDX files or the 1024-character photo-caption limit.
- Do not add runtime or test dependencies.
- Preserve supported inline formatting and semantic line breaks.
- Keep all developer-facing prose in English.

---

### Task 1: Telegram-safe HTML conversion and truncation

**Files:**
- Create: `scripts/tests/test_string.py`
- Modify: `scripts/utils/string.py`

**Interfaces:**
- Consumes: Markdown or embedded HTML as `str`.
- Produces: `markdown_to_html(text: str) -> str` and `truncate_html(html: str, max_length: int) -> str`.

- [ ] **Step 1: Write failing conversion and truncation tests**

Create `scripts/tests/test_string.py`:

```python
import unittest

from bs4 import BeautifulSoup

from utils.string import markdown_to_html, truncate_html


class MarkdownToHtmlTest(unittest.TestCase):
    def test_preserves_paragraphs_and_all_br_spellings(self):
        source = "One<br>Two<br/>Three<br />Four<br/><br/>Five\n\nSix"

        result = markdown_to_html(source)

        self.assertEqual(result, "One\nTwo\nThree\nFour\n\nFive\n\nSix")

    def test_preserves_supported_markdown_formatting(self):
        source = "**Bold** and *italic* with [a link](https://example.com)"

        result = markdown_to_html(source)

        self.assertEqual(
            result,
            '<strong>Bold</strong> and <em>italic</em> with '
            '<a href="https://example.com">a link</a>',
        )

    def test_unwraps_unsupported_tags_and_escapes_text(self):
        source = "<section>R&D <span>inside</span></section>"

        result = markdown_to_html(source)

        self.assertEqual(result, "R&amp;D inside")


class TruncateHtmlTest(unittest.TestCase):
    def test_preserves_newlines_and_closes_tags_within_limit(self):
        source = "<strong>Intro\nSecond line " + ("x" * 80) + "</strong>"

        result = truncate_html(source, 60)

        self.assertLessEqual(len(result), 60)
        self.assertIn("Intro\nSecond line", result)
        self.assertTrue(result.startswith("<strong>"))
        self.assertTrue(result.endswith("</strong>"))
        self.assertEqual(
            BeautifulSoup(result, "html.parser").get_text(),
            "Intro\nSecond line " + ("x" * 25),
        )


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run the tests and verify the expected failure**

Run:

```bash
PYTHONPATH=scripts .venv/bin/python -m unittest scripts/tests/test_string.py -v
```

Expected: the test module fails to import because `truncate_html` does not exist.

- [ ] **Step 3: Implement Telegram-safe conversion and HTML-aware truncation**

Replace `scripts/utils/string.py` with:

```python
import re

from bs4 import BeautifulSoup
import markdown


_SUPPORTED_TAGS = {
    "a",
    "b",
    "blockquote",
    "code",
    "del",
    "em",
    "i",
    "ins",
    "pre",
    "s",
    "strike",
    "strong",
    "tg-spoiler",
    "u",
}
_BLOCK_TAGS = ("blockquote", "div", "h1", "h2", "h3", "h4", "h5", "h6", "li", "p", "pre")


def markdown_to_html(text: str) -> str:
    html = markdown.markdown(text, output_format="html5")
    soup = BeautifulSoup(html, "html.parser")

    for line_break in soup.find_all("br"):
        line_break.replace_with("\n")

    for block in soup.find_all(_BLOCK_TAGS):
        block.insert_after("\n\n")

    for tag in soup.find_all(True):
        if tag.name not in _SUPPORTED_TAGS:
            tag.unwrap()
            continue

        if tag.name == "a":
            tag.attrs = {"href": tag.get("href", "")}
        elif tag.name == "code" and tag.parent and tag.parent.name == "pre":
            tag.attrs = {"class": tag.get("class", [])}
        elif tag.name == "blockquote" and tag.has_attr("expandable"):
            tag.attrs = {"expandable": ""}
        else:
            tag.attrs = {}

    return re.sub(r"\n{3,}", "\n\n", str(soup)).strip()


def truncate_html(html: str, max_length: int) -> str:
    if max_length <= 0:
        return ""
    if len(html) <= max_length:
        return html

    text_length = len(BeautifulSoup(html, "html.parser").get_text())
    low = 0
    high = text_length
    best = ""

    while low <= high:
        midpoint = (low + high) // 2
        candidate = _html_text_prefix(html, midpoint)
        if len(candidate) <= max_length:
            best = candidate
            low = midpoint + 1
        else:
            high = midpoint - 1

    return best


def _html_text_prefix(html: str, text_length: int) -> str:
    soup = BeautifulSoup(html, "html.parser")
    remaining = text_length
    truncated = remaining == 0

    for text_node in list(soup.find_all(string=True)):
        if truncated:
            text_node.extract()
            continue

        if len(text_node) <= remaining:
            remaining -= len(text_node)
            truncated = remaining == 0
            continue

        text_node.replace_with(text_node[:remaining])
        remaining = 0
        truncated = True

    for tag in reversed(soup.find_all(True)):
        if not tag.contents:
            tag.decompose()

    return str(soup)


def strip_html(html: str) -> str:
    soup = BeautifulSoup(html, "html.parser")
    return soup.get_text(" ", strip=True)
```

- [ ] **Step 4: Run the focused tests and verify they pass**

Run:

```bash
PYTHONPATH=scripts .venv/bin/python -m unittest scripts/tests/test_string.py -v
```

Expected: all four tests pass.

- [ ] **Step 5: Commit the converter and truncation helper**

```bash
git add scripts/utils/string.py scripts/tests/test_string.py
git commit -m "fix: preserve Telegram caption formatting"
```

---

### Task 2: Event caption integration and regression coverage

**Files:**
- Create: `scripts/tests/test_event.py`
- Modify: `scripts/models/Event.py`

**Interfaces:**
- Consumes: `markdown_to_html(text: str) -> str` and `truncate_html(html: str, max_length: int) -> str` from Task 1.
- Produces: `Event.generate_telegram_message() -> str` that returns valid Telegram HTML no longer than `TELEGRAM_CAPTION_LIMIT`.

- [ ] **Step 1: Write the failing event regression test**

Create `scripts/tests/test_event.py`:

```python
import unittest
from pathlib import Path

from models.Event import Event, TELEGRAM_CAPTION_LIMIT


class EventTelegramMessageTest(unittest.TestCase):
    def test_20260729_caption_preserves_description_structure_and_formatting(self):
        event = Event.from_file_path(Path("_events/20260729.mdx"))

        message = event.generate_telegram_message()

        self.assertLessEqual(len(message), TELEGRAM_CAPTION_LIMIT)
        self.assertIn("livello.\nCome di consueto", message)
        self.assertIn("ordine.\n\nTre talk", message)
        self.assertIn("Web.\n\n🌐 <strong>HTTP QUERY — 10 anni dopo</strong>", message)
        self.assertIn('<a href="https://www.linkedin.com/in/valentinadimarco6995/">Valentina Di Marco</a>', message)
        self.assertIn("continua a leggere...", message)
        for tag in ("a", "b", "em", "strong"):
            self.assertEqual(message.count(f"<{tag}"), message.count(f"</{tag}>"))


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run the regression test and verify it fails for flattened newlines**

Run:

```bash
PYTHONPATH=scripts .venv/bin/python -m unittest scripts/tests/test_event.py -v
```

Expected: FAIL because `livello.\nCome di consueto` is absent from the generated caption.

- [ ] **Step 3: Integrate conversion and complete-caption truncation**

In `scripts/models/Event.py`, import the new helper:

```python
from utils.string import markdown_to_html, strip_html, truncate_html
```

Append the converted description directly:

```python
        if self.description:
            lines.append(markdown_to_html(self.description))
            lines.append("")
```

Replace the current line-by-line truncation block with:

```python
        content = "\n".join(lines)
        if len(content) <= TELEGRAM_CAPTION_LIMIT:
            return content

        more = f'...\n🔗 <a href="{event_url}">continua a leggere...</a>'
        available_length = TELEGRAM_CAPTION_LIMIT - len(more)
        return truncate_html(content, available_length).rstrip() + more
```

- [ ] **Step 4: Run all Python tests and inspect the generated regression caption**

Run:

```bash
PYTHONPATH=scripts .venv/bin/python -m unittest discover -s scripts/tests -v
PYTHONPATH=scripts .venv/bin/python - <<'PY'
from pathlib import Path
from models.Event import Event

message = Event.from_file_path(Path("_events/20260729.mdx")).generate_telegram_message()
print(message)
print({"length": len(message)})
PY
```

Expected: all five tests pass; the printed caption contains preserved lines and supported HTML and has `length` no greater than 1024.

- [ ] **Step 5: Run repository checks**

Run:

```bash
npm test -- --runInBand
npm run build
```

Expected: configured tests and the production build pass. If `npm test` is not configured, record that fact and rely on the Python suite plus `npm run build`.

- [ ] **Step 6: Commit the event integration**

```bash
git add scripts/models/Event.py scripts/tests/test_event.py
git commit -m "fix: keep structure in Telegram event captions"
```
