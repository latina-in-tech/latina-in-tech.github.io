from pathlib import Path
from typing import Final

_PROJECT_ROOT: Final[Path] = Path(__file__).parent.parent.parent

EVENTS_PATH: Final[Path] = _PROJECT_ROOT / "_events"
EVENTS_IMAGES_PATH: Final[Path] = _PROJECT_ROOT / "public" / "assets" / "events"
SCRIPTS_PATH: Final[Path] = _PROJECT_ROOT / "scripts"
LAST_NOTIFIED_PATH: Final[Path] = SCRIPTS_PATH / "last_notified_event.dat"
