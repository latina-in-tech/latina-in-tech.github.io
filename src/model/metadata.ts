export type OpenGraphMetadata = {
  title: string;
  description: string;
  url: string;
  type: 'website' | 'article';
  siteName: string;
  /** language_TERRITORY, e.g. it_IT */
  locale: string;
  alternateLocale: string;
  publishedTime?: string;
  image: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
};

export type Metadata = {
  title: string;
  description: string;
  keywords: string[];
  opengraph?: OpenGraphMetadata;
};
