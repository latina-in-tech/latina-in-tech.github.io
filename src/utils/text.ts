/**
 * flattens a markdown/html snippet into a single line of plain text:
 * meta tags are read by crawlers, markup in them shows up verbatim
 */
export const toPlainText = (source: string): string =>
  source
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

/**
 * shortens a text to maxLength characters (ellipsis included),
 * cutting on a word boundary
 */
export const truncate = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  const clipped = text.slice(0, maxLength - 1);
  const lastSpace = clipped.lastIndexOf(' ');
  const cut = lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped;
  return `${cut.replace(/[\s.,;:!?—-]+$/, '')}…`;
};
