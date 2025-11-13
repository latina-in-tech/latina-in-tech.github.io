import re
import json
from pathlib import Path
from typing import Optional, List, Dict
from datetime import datetime, timezone, timedelta

from scripts.utils.resource import LAST_NOTIFIED_PATH, EVENTS_PATH
from scripts.utils.telegram import send_telegram_text_message


class Event:

    _DATE_PATTERN = re.compile(r"^(\d{8})")
    _FRONTMATTER_PATTERN = re.compile(r"^---\n(.*?)\n---", re.DOTALL)
    _ROME_TZ = timezone(timedelta(hours=1))  # UTC+1 (CET) o UTC+2 (CEST) in estate

    def __init__(self):
        self._file: Path
        self._when: datetime
        self._title: str = ""
        self._date: datetime
        self._description: str = ""
        self._place: str = ""
        self._maps: str = ""
        self._thumbnail: str = ""
        self._tags: List[str] = []
        self._speakers: List[Dict] = []
        self._slides: List[Dict] = []
        self._youtube_url: Optional[str] = None
        self._signup: Optional[str] = None
        self._duration: Optional[int] = None

    @classmethod
    def from_file_path(cls, file_path: Path) -> Optional["Event"]:
        event = Event()
        if not file_path.exists() or not file_path.is_file():
            return None
        event._file = Path(file_path)
        event_file_name = file_path.stem
        match = cls._DATE_PATTERN.match(event_file_name)
        if not match:
            return None

        date_str = match.group(1)
        try:
            year = int(date_str[0:4])
            month = int(date_str[4:6])
            day = int(date_str[6:8])
            when = datetime(year, month, day)
        except (ValueError, IndexError):
            return None
        event._when = when

        # Parse MDX content
        event._parse_mdx_content()

        return event

    def _parse_mdx_content(self):
        """Parse the MDX file and extract frontmatter data."""
        content = self._file.read_text(encoding="utf-8")

        match = self._FRONTMATTER_PATTERN.match(content)
        if not match:
            return

        frontmatter = match.group(1)

        # Parse frontmatter fields
        self._title = self._extract_field(frontmatter, "title")
        self._description = self._extract_field(frontmatter, "description")
        self._place = self._extract_field(frontmatter, "place")
        self._maps = self._extract_field(frontmatter, "maps")
        self._thumbnail = self._extract_field(frontmatter, "thumbnail")
        self._youtube_url = self._extract_field(frontmatter, "youtubeUrl")
        self._signup = self._extract_field(frontmatter, "signup")

        date = self._extract_field(frontmatter, "date")
        if date:
            try:
                self._date = datetime.fromisoformat(date)
            except ValueError:
                pass

        duration_str = self._extract_field(frontmatter, "duration")
        if duration_str:
            try:
                self._duration = int(duration_str)
            except ValueError:
                pass

        # Parse tags
        tags_match = re.search(r"tags:\s*\[(.*?)\]", frontmatter, re.DOTALL)
        if tags_match:
            tags_str = tags_match.group(1)
            self._tags = [tag.strip().strip("'\"") for tag in tags_str.split(",")]

        # Parse speakers
        speakers_match = re.search(r"speakers:\s*\[(.*?)\]", frontmatter, re.DOTALL)
        if speakers_match:
            speakers_str = speakers_match.group(1)
            for speaker_json in re.findall(r"'(\{.*?\})'", speakers_str):
                try:
                    speaker_json = speaker_json.replace("\\'", "'")
                    speaker = json.loads(speaker_json)
                    self._speakers.append(speaker)
                except json.JSONDecodeError:
                    pass

        # Parse slides
        slides_match = re.search(r"slides:\s*\[(.*?)\]", frontmatter, re.DOTALL)
        if slides_match:
            slides_str = slides_match.group(1)
            for slide_json in re.findall(r"'(\{.*?\})'", slides_str):
                try:
                    slide_json = slide_json.replace("\\'", "'")
                    slide = json.loads(slide_json)
                    self._slides.append(slide)
                except json.JSONDecodeError:
                    pass

    def _extract_field(self, frontmatter: str, field_name: str) -> str:
        """Extract a single field value from frontmatter."""
        pattern = rf"{field_name}:\s*['\"]?(.*?)['\"]?\n"
        match = re.search(pattern, frontmatter)
        return match.group(1).strip() if match else ""

    @property
    def file_name(self) -> str:
        """Returns the name of the event file."""
        return self._file.name

    @property
    def when(self) -> datetime:
        """Returns the event date."""
        return self._when

    @property
    def title(self) -> str:
        return self._title

    @property
    def description(self) -> str:
        return self._description

    @property
    def place(self) -> str:
        return self._place

    @property
    def maps(self) -> str:
        return self._maps

    @property
    def thumbnail(self) -> str:
        return self._thumbnail

    @property
    def tags(self) -> List[str]:
        return self._tags

    @property
    def speakers(self) -> List[Dict]:
        return self._speakers

    @property
    def slides(self) -> List[Dict]:
        return self._slides

    @property
    def youtube_url(self) -> Optional[str]:
        return self._youtube_url

    @property
    def signup(self) -> Optional[str]:
        return self._signup

    @property
    def duration(self) -> Optional[int]:
        return self._duration

    def to_telegram_markdown(self) -> str:
        """Generate a Telegram-formatted markdown message for the event."""
        lines = []

        # Title
        lines.append(f"*{self._escape_markdown(self.title)}*\n")

        # Date and time
        # Converti in timezone di Roma (UTC+1 o UTC+2)
        # Per semplicità usiamo UTC+1, ma in produzione si dovrebbe gestire l'ora legale
        event_time_rome = self._date.replace(tzinfo=timezone.utc).astimezone(
            self._ROME_TZ
        )
        date_str = event_time_rome.strftime("%d/%m/%Y")
        time_str = event_time_rome.strftime("%H:%M")
        lines.append(f"📅 *Data:* {date_str} alle {time_str}")

        if self.duration:
            lines.append(f"⏱ *Durata:* {self.duration} minuti")

        # Place
        if self.place:
            lines.append(f"📍 *Luogo:* {self._escape_markdown(self.place)}")
            if self.maps:
                lines.append(f"🗺 [Mappa]({self.maps})")

        lines.append("")

        # Description (remove HTML tags)
        if self.description:
            clean_desc = re.sub(r"<br\s*/?>", "\n", self.description)
            clean_desc = re.sub(r"<.*?>", "", clean_desc)
            lines.append(self._escape_markdown(clean_desc))
            lines.append("")

        # Speakers
        if self.speakers:
            lines.append("*👥 Speaker:*")
            for speaker in self.speakers:
                linkedin_url = speaker.get("linkedinUrl", None)
                speaker_info = f"• {speaker.get('name', 'N/A')}"
                if speaker.get("role"):
                    speaker_info += f" - {speaker['role']}"
                if speaker.get("company"):
                    speaker_info += f" @ {speaker['company']}"
                speaker_info = self._escape_markdown(speaker_info)
                if linkedin_url:
                    speaker_info = f" ([{speaker_info}]({linkedin_url}))"
                lines.append(speaker_info)
            lines.append("")

        # Tags
        if self.tags:
            tags_str = " ".join(
                [f"#{tag.replace(' ', '_').replace('-', '_')}" for tag in self.tags]
            )
            lines.append(tags_str)
            lines.append("")

        # Links
        if self.signup:
            lines.append(f"🎫 [Registrati qui]({self.signup})")

        if self.youtube_url:
            lines.append(f"📺 [Guarda la registrazione]({self.youtube_url})")

        return "\n".join(lines)

    def _escape_markdown(self, text: str) -> str:
        """Escape special characters for Telegram MarkdownV2."""
        special_chars = [
            "_",
            "*",
            "[",
            "]",
            "(",
            ")",
            "~",
            "`",
            ">",
            "#",
            "+",
            "-",
            "=",
            "|",
            "{",
            "}",
            ".",
            "!",
        ]
        for char in special_chars:
            text = text.replace(char, f"\\{char}")
        return text

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

    def __hash__(self) -> int:
        return hash((self._file, self._when))

    def __repr__(self) -> str:
        return f"Event(file={self._file.name}, when={self._when.date()})"


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
    print(f"New event to notify: {to_notify}")
    send_telegram_text_message(to_notify.to_telegram_markdown())
