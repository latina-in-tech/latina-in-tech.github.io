import requests
import os

BOT_TOKEN = os.environ["TELEGRAM_NOTIFY_EVENT_BOT_TOKEN"]
CHAT_ID = int(os.environ["TELEGRAM_NOTIFY_EVENT_CHAT_ID"])
THREAD_ID = int(os.environ["TELEGRAM_NOTIFY_EVENT_THREAD_ID"])

API = f"https://api.telegram.org/bot{BOT_TOKEN}"


def get_telegram_chat_and_thread_ids() -> None:
    from time import sleep

    """
    execute this function and in the meanwhile send a message by tagging the bot
    i.e "@YourBotUsername hello!"
    :return:
    """
    while True:
        updates = requests.get(f"{API}/getUpdates", timeout=10).json()
        can_stop = False
        for u in updates.get("result", []):
            msg = u.get("message") or u.get("channel_post") or {}
            chat = msg.get("chat", {})
            chat_id = chat.get("id")
            thread_id = msg.get("message_thread_id")
            text = msg.get("text")
            sender = msg.get("from")
            if chat_id and thread_id:
                print(
                    {
                        "chat_id": chat_id,
                        "thread_id": thread_id,
                        "text": text,
                        "from": f'{sender.get("username")} ({sender.get("first_name", "")} {sender.get("last_name", "")})',
                    }
                )
                can_stop = True
                break
        if can_stop:
            break
        sleep(1.2)


def send_telegram_text_message(text: str) -> None:
    send = requests.post(
        f"{API}/sendMessage",
        json={
            "chat_id": CHAT_ID,
            "message_thread_id": THREAD_ID,
            "text": text,
            "parse_mode": "HTML",
        },
        timeout=10,
    )
    send.raise_for_status()


def send_telegram_image_message(caption: str, image_blob: bytes) -> None:
    send = requests.post(
        f"{API}/sendPhoto",
        data={
            "chat_id": CHAT_ID,
            "message_thread_id": THREAD_ID,
            "caption": caption,
            "parse_mode": "HTML",
        },
        files={"photo": image_blob},
        timeout=10,
    )
    send.raise_for_status()
