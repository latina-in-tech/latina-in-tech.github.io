import re
import json
from pathlib import Path
from typing import Optional, List, Dict
from datetime import datetime, timezone, timedelta

from bs4 import BeautifulSoup
import markdown

from utils.string import markdown_to_html, strip_html
from utils.resource import EVENTS_IMAGES_PATH

LIT_EVENT_URL = "https://www.latinaintech.org/it/events/"
TELEGRAM_CAPTION_LIMIT = 1024


class Event:

    _DATE_PATTERN = re.compile(r"^(\d{8}.*)")
    _FRONTMATTER_PATTERN = re.compile(r"^---\n(.*?)\n---", re.DOTALL)
    _ROME_TZ = timezone(timedelta(hours=1))  # UTC+1 (CET) o UTC+2 (CEST) in estate

    def __init__(self, file: Path, when: datetime):
        self._file: Path = file
        self._when: datetime = when
        self._title: str = ""
        self._date: datetime
        self._description: str = ""
        self._place: str = ""
        self._maps: str = ""
        self._thumbnail: Optional[Path]
        self._tags: List[str] = []
        self._speakers: List[Dict] = []
        self._slides: List[Dict] = []
        self._youtube_url: Optional[str] = None
        self._signup: Optional[str] = None
        self._duration: Optional[int] = None

    @classmethod
    def from_file_path(cls, file_path: Path) -> Optional["Event"]:

        if not file_path.exists() or not file_path.is_file():
            return None
        event_file = Path(file_path)
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
        event = cls(event_file, when)

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
        thumbnail = self._extract_field(frontmatter, "thumbnail")
        if thumbnail:
            thumbnail = thumbnail.split("/")[-1]
            thumbnail = Path(EVENTS_IMAGES_PATH) / thumbnail
            if thumbnail.exists():
                self._thumbnail = thumbnail

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
        tags_match = re.search(r"tags:\s*\[(.*?)]", frontmatter, re.DOTALL)
        if tags_match:
            tags_str = tags_match.group(1)
            self._tags = [tag.strip().strip("'\"") for tag in tags_str.split(",")]

        # Parse speakers
        speakers_match = re.search(r"speakers:\s*\[(.*?)]", frontmatter, re.DOTALL)
        if speakers_match:
            speakers_str = speakers_match.group(1)
            for speaker_json in re.findall(r"'(\{.*?})'", speakers_str):
                try:
                    speaker_json = speaker_json.replace("\\'", "'")
                    speaker = json.loads(speaker_json)
                    self._speakers.append(speaker)
                except json.JSONDecodeError:
                    pass

        # Parse slides
        slides_match = re.search(r"slides:\s*\[(.*?)]", frontmatter, re.DOTALL)
        if slides_match:
            slides_str = slides_match.group(1)
            for slide_json in re.findall(r"'(\{.*?})'", slides_str):
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
    def thumbnail(self) -> Optional[Path]:
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

    def generate_telegram_message(self) -> str:
        """Generate a Telegram-formatted HTML message for the event."""
        lines = []

        # Title
        lines.append(f"<b>{strip_html(self.title)}</b>\n")

        # Links
        if self.signup:
            lines.append(f'🎫 <a href="{self.signup}">Registrati qui</a>')

        # Date and time
        event_time_rome = self._date.replace(tzinfo=timezone.utc).astimezone(
            self._ROME_TZ
        )
        date_str = event_time_rome.strftime("%d/%m/%Y")
        time_str = event_time_rome.strftime("%H:%M")
        lines.append(f"📅 <b>Data:</b> {date_str} alle {time_str}")

        if self.duration:
            lines.append(f"🕣 <b>Durata:</b> {self.duration} minuti")

        # Place
        if self.place:
            if self.maps:
                lines.append(
                    f'📍 <a href="{self.maps}">{strip_html(self.place)}</a>'
                )
            else:
                lines.append(f'📍 <a href="{self.maps}">Mappa</a>')

        lines.append("")

        # Description (remove HTML tags)
        if self.description:
            lines.append(
                markdown_to_html(self.description)
                .replace("\n", " ")
                .replace("  ", " ")
            )
            lines.append("")

        # Speakers
        if self.speakers:
            lines.append("<b>👥 Speaker:</b>")
            for speaker in self.speakers:
                linkedin_url = speaker.get("linkedinUrl", None)
                speaker_name = speaker.get("name", "N/A")
                speaker_parts = [speaker_name]

                if speaker.get("role"):
                    speaker_parts.append(f" - {speaker['role']}")
                if speaker.get("company"):
                    speaker_parts.append(f" @ {speaker['company']}")

                speaker_info = "".join(speaker_parts)

                if linkedin_url:
                    lines.append(
                        f'• <a href="{linkedin_url}">{strip_html(speaker_info)}</a>'
                    )
                else:
                    lines.append(f"• {strip_html(speaker_info)}")
            lines.append("")

        if self.youtube_url:
            lines.append(f'📺 <a href="{self.youtube_url}">Guarda la registrazione</a>')

        event_url = f"{LIT_EVENT_URL}{self._file.stem}"
        more = f'\n🔗 <a href="{event_url}">continua a leggere...</a>'
        content = "\n".join(lines)
        if len(content) < TELEGRAM_CAPTION_LIMIT:  # telegram caption limit
            # the content fits within the limit
            return "\n".join(lines)

        limited_lines = []
        for line in lines:
            if len("\n".join(limited_lines + [line, more])) > TELEGRAM_CAPTION_LIMIT:
                # since we are going to truncate, check only the text by removing any markup
                plain_line = strip_html(line)
                # we can cat the line
                new_line = (
                    plain_line[
                        : TELEGRAM_CAPTION_LIMIT
                        - len("\n".join(limited_lines))
                        - len(more)
                        - 3
                    ]
                    + "..."
                    + more
                )
                limited_lines.append(new_line)
                break
            limited_lines.append(line)
        return "\n".join(limited_lines)



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
