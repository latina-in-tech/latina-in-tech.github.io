import { GetStaticProps, GetStaticPaths } from 'next';
import React, { useCallback, useEffect, useMemo } from 'react';

import { getEvent, getAllEvents } from '@/utils/mdxUtils';
import { ParsedUrlQuery } from 'querystring';
import { IEvent, slidesSchema, speakerSchema } from '@/model/event';
import { BsLinkedin } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import Header from '@/components/Header';
import EventActions from '@/components/event/EventActions';
import EventDescription from '@/components/event/EventDescription';
import { Helmet } from 'react-helmet';
import EventTags from '@/components/event/EventTags';
import EventsSlides from '@/components/event/EventSlides';
import { ZodSchema } from 'zod';
import { isDevEnv } from '@/utils/dev';
import { i18n } from 'i18n.config';

type Props = {
  source: string;
  frontMatter: IEvent;
};

type ParseItemsReturn<T> = {
  items: T[];
  errors: string[];
};

/**
 * given a list of string representing a T object, it tries
 * to parse each string into a T object using the provided schema
 * if the parsing fails, it returns the errors
 */
const parseItems = <T,>(
  items: string[],
  schema: ZodSchema<T>
): ParseItemsReturn<T> => {
  const parsed = items.map(item => schema.safeParse(JSON.parse(item)));
  return parsed.reduce(
    (acc, curr) => {
      if (curr.success) {
        return { ...acc, items: [...acc.items, curr.data] };
      }
      return {
        ...acc,
        errors: [...acc.errors, ...curr.error.errors.map(e => e.message)]
      };
    },
    { items: [], errors: [] } as ParseItemsReturn<T>
  );
};

const thumbHeight = 250;

const EventPage = ({ source, frontMatter: event }: Props) => {
  const speakersObjects = useMemo(
    () => parseItems(event.speakers ?? [], speakerSchema),
    [event.speakers]
  );
  useEffect(() => {
    window.location.href = `/${i18n.defaultLocale}`;
  }, []);

  return;
};

export default EventPage;

interface Iparams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as Iparams;
  const { content, data } = getEvent(slug);
  return {
    props: {
      source: content,
      frontMatter: data
    }
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const events = getAllEvents(['slug']);

  const paths = events.map(event => ({
    params: {
      slug: event.slug
    }
  }));

  return {
    paths,
    fallback: false
  };
};
