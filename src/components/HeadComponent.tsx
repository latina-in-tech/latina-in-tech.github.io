import Head from 'next/head';
import React from 'react';
import { Metadata } from '@/model/metadata';

type Props = {
  children?: React.ReactNode;
  metadata: Metadata;
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
          <meta property='og:type' content={opengraph.type} />
          <meta property='og:site_name' content={opengraph.siteName} />
          <meta property='og:title' content={opengraph.title} />
          <meta property='og:description' content={opengraph.description} />
          <meta property='og:url' content={opengraph.url} />
          <meta property='og:image' content={opengraph.image.url} />
          <meta
            property='og:image:width'
            content={String(opengraph.image.width)}
          />
          <meta
            property='og:image:height'
            content={String(opengraph.image.height)}
          />
          <meta property='og:image:alt' content={opengraph.image.alt} />
          <meta property='og:locale' content={opengraph.locale} />
          <meta
            property='og:locale:alternate'
            content={opengraph.alternateLocale}
          />
          {opengraph.publishedTime && (
            <meta
              property='article:published_time'
              content={opengraph.publishedTime}
            />
          )}
          {/* X and a few other clients look at the twitter:* tags first */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={opengraph.title} />
          <meta name='twitter:description' content={opengraph.description} />
          <meta name='twitter:image' content={opengraph.image.url} />
        </>
      )}
      {children}
    </Head>
  );
}
