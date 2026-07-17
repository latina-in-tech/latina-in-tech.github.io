# Telegram Caption Formatting Design

## Goal

Render event descriptions in Telegram photo captions as faithfully as the Telegram Bot API allows. Preserve the semantic structure and supported inline formatting of Markdown and embedded HTML while keeping the existing event notification flow.

## Current Problem

`Event.generate_telegram_message()` replaces every newline produced by `markdown_to_html()` with a space. When a caption exceeds Telegram's 1024-character photo-caption limit, the truncation path also converts the description to plain text and flattens its whitespace. As a result, `_events/20260729.mdx` loses paragraph and talk boundaries, and its Markdown emphasis is removed before the truncation point.

## Design

### Telegram HTML conversion

Convert the event description to HTML accepted by Telegram's existing `parse_mode="HTML"` requests.

- Preserve supported inline tags such as `strong`, `em`, `a`, `code`, `pre`, and `blockquote`.
- Convert `<br>`, `<br/>`, and `<br />` to newline characters.
- Separate HTML or Markdown paragraphs with a blank line.
- Remove unsupported container tags while preserving their text content.
- Keep user-visible text safely escaped where required by Telegram HTML parsing.

This conversion remains in `scripts/utils/string.py`; transport functions in `scripts/utils/telegram.py` do not change.

### Caption generation and truncation

`Event.generate_telegram_message()` will retain the converted description's newlines instead of replacing them with spaces.

When the complete photo caption exceeds 1024 characters, truncate the Telegram HTML without flattening whitespace. The truncated result must:

- remain within the caption limit;
- preserve newlines before the cut;
- keep supported formatting that starts before the cut;
- close every open HTML tag;
- append the existing ellipsis and “continua a leggere...” link.

The rest of the notification content and ordering remain unchanged.

## Error Handling

Malformed or unsupported description markup must not produce invalid Telegram HTML. Unsupported elements are unwrapped, and truncation closes supported tags before returning the caption. Existing HTTP error handling remains unchanged.

## Tests

Add focused Python tests using the standard library test runner so no new runtime dependency is required.

1. Verify that Markdown paragraphs and every supported `<br>` spelling preserve their intended newlines.
2. Verify that Markdown emphasis and links become Telegram-supported HTML.
3. Verify that HTML-aware truncation preserves newlines, closes tags, includes the continuation link, and stays within 1024 characters.
4. Add a regression test using `_events/20260729.mdx` that confirms separate lines remain visible for the introduction and each talk in the truncated caption.

## Non-goals

- Migrating notifications to Telegram Rich Messages.
- Changing the event schema or the content of `_events/20260729.mdx`.
- Changing the photo-caption limit or sending the description as a separate message.
