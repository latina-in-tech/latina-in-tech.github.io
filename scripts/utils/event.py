from typing import Optional

from models.Event import Event
from utils.resource import LAST_NOTIFIED_PATH, EVENTS_PATH, EVENTS_IMAGES_PATH
from utils.telegram import (
    send_telegram_text_message,
    send_telegram_image_message,
)


def get_last_notified_event() -> Optional["Event"]:
    if not LAST_NOTIFIED_PATH.exists() or not LAST_NOTIFIED_PATH.is_file():
        return None
    content = LAST_NOTIFIED_PATH.read_text()
    last_notified_event = EVENTS_PATH / content.strip()
    if not last_notified_event.exists():
        return None
    return Event.from_file_path(last_notified_event)


def get_events() -> list["Event"]:
    """
    retrieve all events and sort them by date descending
    the first event in the list is the most recent one
    :return:
    """
    events = []
    for file in EVENTS_PATH.glob("*.mdx"):
        event = Event.from_file_path(file)
        if event is not None:
            events.append(event)
    return events


def get_event_to_notify() -> Optional["Event"]:
    last_notified_event = get_last_notified_event()
    if last_notified_event is None:
        # we don't have info about last notified event, so we do nothing
        return None
    all_events = get_events()
    if len(all_events) == 0:
        return None
    # events are comparable by their date (coming from the filename)
    all_events.sort(reverse=True)
    last_event = all_events[0]
    if last_event <= last_notified_event:
        return None
    return last_event


def save_last_notified_event(event: "Event") -> None:
    LAST_NOTIFIED_PATH.write_text(event.file_name)

def notify_last_event():
    to_notify = get_event_to_notify()
    if to_notify is None:
        print("No new event to notify")
        return
    print(f"New event to notify: {to_notify}")
    try:
        if to_notify.thumbnail:
            send_telegram_image_message(
                to_notify.to_telegram_html(), to_notify.thumbnail.read_bytes()
            )
        else:
            send_telegram_text_message(to_notify.to_telegram_html())
        save_last_notified_event(to_notify)
    except Exception as e:
        print(f"Error while notifying event {to_notify}: {e}")
    
