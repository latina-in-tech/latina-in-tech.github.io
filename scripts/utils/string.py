import re

import markdown
from bs4 import BeautifulSoup


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
_BLOCK_TAGS = (
    "blockquote",
    "div",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "li",
    "p",
    "pre",
)


def markdown_to_html(text: str) -> str:
    html = markdown.markdown(text, output_format="html5")
    html = re.sub(r"<br\s*/?>", "\n", html, flags=re.IGNORECASE)
    soup = BeautifulSoup(html, "html.parser")

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
    if html_text_length(html) <= max_length:
        return html

    return _html_text_prefix(html, max_length)


def html_text_length(html: str) -> int:
    return len(BeautifulSoup(html, "html.parser").get_text())


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
