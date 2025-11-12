from scripts.utils.resource import Resource
from scripts.utils.telegram import send_telegram_image_message

file_path = Resource().events_images_path() / "20230629.png"
file_content = file_path.read_bytes()
send_telegram_image_message("*EVENTO TEST* \\(04 APRILE 2024\\)", file_content)
