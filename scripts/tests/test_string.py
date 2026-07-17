import unittest

from bs4 import BeautifulSoup

from utils.string import html_text_length, markdown_to_html, truncate_html


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

        self.assertEqual(html_text_length(result), 60)
        self.assertIn("Intro\nSecond line", result)
        self.assertTrue(result.startswith("<strong>"))
        self.assertTrue(result.endswith("</strong>"))
        self.assertEqual(
            BeautifulSoup(result, "html.parser").get_text(),
            "Intro\nSecond line " + ("x" * 42),
        )


if __name__ == "__main__":
    unittest.main()
