import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, GetStaticPaths } from 'next';
import React, { useEffect } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { getEvent, getAllEvents } from '@/utils/mdxUtils';
import Prerequisites from '../../components/Prerequisites';
import { ParsedUrlQuery } from 'querystring';
import Stacks from '../../components/Stacks';
import { IEvent } from '@/model/event';
import { useMdxComponentsContext } from '@/context/mdxContext';

type Props = {
  source: MDXRemoteSerializeResult;
  frontMatter: Omit<IEvent, 'slug'>;
};

const components = {
  Prerequisites,
  Stacks
};

const EventPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
  const { setPrerequisites, setStacks } = useMdxComponentsContext();

  useEffect(() => {
    // set prerequisites
    setPrerequisites(frontMatter.prerequisites);
    // set stacks
    setStacks(frontMatter.stacks);
  }, [
    setPrerequisites,
    setStacks,
    frontMatter.prerequisites,
    frontMatter.stacks
  ]);

  return (
    <div>
      <article className='prose prose-green'>
        <div className='mb-4'></div>

        <h1>{frontMatter.title}</h1>

        <p>{frontMatter.description}</p>

        <MDXRemote components={components} {...source} />
      </article>
    </div>
  );
};

export default EventPage;

interface Iparams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params as Iparams;
  // get the slug
  const { content, data } = getEvent(slug);
  // serialize the data on the server side
  const mdxSource = await serialize(content, { scope: data });
  return {
    props: {
      source: mdxSource,
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
