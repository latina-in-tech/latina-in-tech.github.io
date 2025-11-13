from pathlib import Path
from typing import Optional
from datetime import datetime

from scripts.utils.resource import SCRIPTS_PATH, LAST_NOTIFIED_PATH, EVENTS_PATH


class Event:

    def __init__(self):
        self._file: Path
        self._when: datetime

    @staticmethod
    def from_file_path(file_path: Path) -> Optional["Event"]:
        event = Event()
        file_path = Path(file_path)
        if not file_path.exists() or not file_path.is_file():
            return None
        event._file = Path(file_path)
        event_file_name = file_path.stem  # e.g., "20240405-event-name"
        if len(event_file_name) != 8:  # expecting "YYYYMMDD"
            return None
        year, month, day = (
            int(event_file_name[0:4]),
            int(event_file_name[4:6]),
            int(event_file_name[6:8]),
        )
        event._when = datetime(year, month, day)
        return event

    @property
    def file_name(self) -> str:
        return self._file.name

    def __eq__(self, other):
        if isinstance(other, Event):
            return self._file == other._file and self._when == other._when
        return False

    def __ge__(self, other):
        if isinstance(other, Event):
            return self._when >= other._when
        return False

    def __gt__(self, other):
        if isinstance(other, Event):
            return self._when > other._when
        return False

    def __lt__(self, other):
        if isinstance(other, Event):
            return self._when < other._when
        return False

    def __le__(self, other):
        if isinstance(other, Event):
            return self._when <= other._when
        return False


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
    events.sort(reverse=True)
    return events


def get_event_to_notify() -> Optional["Event"]:
    last_notified_event = get_last_notified_event()
    if last_notified_event is None:
        # we don't have info about last notified event, so we do nothing
        return None
    all_events = get_events()
    if len(all_events) == 0:
        return None
    last_event = all_events[0]
    if last_event <= last_notified_event:
        return None
    return last_event


def notify_last_event():
    to_notify = get_event_to_notify()
    if to_notify is None:
        print("No new event to notify")
        return
    print(f"New event to notify: {to_notify.file_name}")
