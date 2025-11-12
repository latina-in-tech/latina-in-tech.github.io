from pathlib import Path
from scripts.utils.telegram import send_telegram_image_message

file_path = (
    Path(__file__).parent.parent / "public" / "assets" / "events" / "20230404.png"
)
file_content = file_path.read_bytes()
send_telegram_image_message("*EVENTO TEST* \\(04 APRILE 2024\\)", file_content)
