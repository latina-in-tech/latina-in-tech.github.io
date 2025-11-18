from bs4 import BeautifulSoup
import markdown


def markdown_to_html(text: str) -> str:
    html = markdown.markdown(text.replace("<br/>", "\n"), output_format="html5")
    soup = BeautifulSoup(html, "html.parser")
    for tag in soup.find_all(["p", "strong", "em", "br"]):
        tag.unwrap()
    return str(soup)

def strip_html(html: str) -> str:
    soup = BeautifulSoup(html, "html.parser")
    return soup.get_text(" ", strip=True)