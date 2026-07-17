import unittest
from pathlib import Path

from models.Event import Event, TELEGRAM_CAPTION_LIMIT
from utils.string import html_text_length


class EventTelegramMessageTest(unittest.TestCase):
    def test_20260729_caption_preserves_description_structure_and_formatting(self):
        event = Event.from_file_path(Path("_events/20260729.mdx"))

        message = event.generate_telegram_message()

        self.assertLessEqual(html_text_length(message), TELEGRAM_CAPTION_LIMIT)
        self.assertIn("livello.\nCome di consueto", message)
        self.assertIn("ordine.\n\nTre talk", message)
        self.assertIn(
            "Web.\n\n🌐 <strong>HTTP QUERY — 10 anni dopo</strong>",
            message,
        )
        self.assertIn(
            '<a href="https://www.linkedin.com/in/valentinadimarco6995/">'
            "Valentina Di Marco</a>",
            message,
        )
        self.assertIn(
            "🐡 <strong>Capabilities Project: tra Web e Nativo</strong>",
            message,
        )
        self.assertIn(
            "🕵️ <strong>Fingerprinting Web — Quando essere unici è un problema</strong>",
            message,
        )
        self.assertIn("aff=oddtdtcreator&amp;keep_tld=true", message)
        for tag in ("a", "b", "em", "strong"):
            self.assertEqual(message.count(f"<{tag}"), message.count(f"</{tag}>"))


if __name__ == "__main__":
    unittest.main()
