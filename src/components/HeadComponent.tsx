import { Locale } from 'i18n.config';
import Head from 'next/head';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    opengraph?: {
      title: string;
      description: string;
      locale: Locale & {
        alternate: Locale;
      };
      image: string & {
        width: string;
        height: string;
        alt: string;
      };
    };
  };
};

export default function HeadComponent({ children, metadata }: Props) {
  const opengraph = metadata.opengraph;

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name='description' content={metadata.description} />
      <meta name='keywords' content={metadata.keywords.join(',')} />
      {opengraph && (
        <>
          <meta property='og:title' content={opengraph.title} />
          <meta property='og:description' content={opengraph.description} />
          <meta property='og:locale' content={opengraph.locale} />
          <meta property='og:image' content={opengraph.image} />
          <meta property='og:image:width' content={opengraph.image.width} />
          <meta property='og:image:height' content={opengraph.image.height} />
          <meta property='og:image:alt' content={opengraph.image.alt} />
          <meta
            property='og:locale:alternate'
            content={opengraph.locale.alternate}
          />
        </>
      )}
      {children}
    </Head>
  );
}
