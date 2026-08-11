import { join } from 'path';
import fs from 'fs';
import sizeOf from 'image-size';
import { Locale } from 'i18n.config';
import { IEvent } from '@/model/event';
import { Metadata } from '@/model/metadata';
import {
  COMMUNITY_KEYWORDS,
  SITE_NAME,
  getAlternateLocale,
  toAbsoluteUrl,
  toOpenGraphLocale
} from '@/model/site';
import { toPlainText, truncate } from '@/utils/text';

const PUBLIC_PATH = join(process.cwd(), 'public');

/** long enough to be informative, short enough not to be truncated everywhere */
const DESCRIPTION_MAX_LENGTH = 200;

/**
 * event thumbnails are not all the same size (960x540 up to 2024, 1280x720 after),
 * and declaring the real size is what makes platforms render the large card
 */
const getImageSize = (publicPath: string) => {
  const filePath = join(PUBLIC_PATH, publicPath);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Event thumbnail [${publicPath}] does not exist.`);
  }
  const { width, height } = sizeOf(filePath);
  if (!width || !height) {
    throw new Error(
      `Cannot read the size of the event thumbnail [${publicPath}].`
    );
  }
  return { width, height };
};

/**
 * builds the metadata of an event page.
 * it reads the thumbnail from the file system, so it can only run at build time
 * (getStaticProps), never in the browser
 */
export const buildEventMetadata = (event: IEvent, lang: Locale): Metadata => {
  // the frontmatter description holds html and markdown: unusable as is in a meta tag
  const description =
    truncate(toPlainText(event.description), DESCRIPTION_MAX_LENGTH) ||
    event.title;
  const { width, height } = getImageSize(event.thumbnail);

  return {
    title: `LiT - ${event.title}`,
    description,
    keywords: Array.from(new Set([...event.tags, ...COMMUNITY_KEYWORDS])),
    opengraph: {
      title: event.title,
      description,
      url: toAbsoluteUrl(`/${lang}/events/${event.slug}`),
      type: 'article',
      siteName: SITE_NAME,
      locale: toOpenGraphLocale(lang),
      alternateLocale: toOpenGraphLocale(getAlternateLocale(lang)),
      publishedTime: event.date,
      image: {
        url: toAbsoluteUrl(event.thumbnail),
        width,
        height,
        alt: `Locandina dell'evento ${event.title}`
      }
    }
  };
};
