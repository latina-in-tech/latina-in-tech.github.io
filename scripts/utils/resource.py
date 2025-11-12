from pathlib import Path


class Resource:

    @staticmethod
    def project_root_path() -> Path:
        # Returns the root path of the project
        """
        root
        |___scripts
        |   |___utils
        |       |___resource.py  <--- __file__
        :return:
        """
        return Path(__file__).parent.parent.parent

    def events_path(self) -> Path:
        # Returns the path to the events assets directory
        # this directory contains all events metadata in front matter format
        return self.project_root_path() / "_events"

    def events_images_path(self) -> Path:
        # Returns the path to the events images directory
        return self.project_root_path() / "public" / "assets" / "events"
