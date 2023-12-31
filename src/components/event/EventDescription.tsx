import { IEvent } from '@/model/event';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

type Props = {
  event: IEvent;
};

const EventDescription: React.FC<Props> = ({ event }: Props) => {
  return (
    <div className='italic tracking-wide p-2'>
      <ReactMarkdown
        components={{
          a: ({ ...props }) => (
            <a
              {...props}
              target='_blank'
              className='underline hover:bg-primary-lighter hover:rounded-xl hover:p-2 dark:hover:bg-primary-dark'
              onClick={event => event.stopPropagation()}
            />
          )
        }}
        rehypePlugins={[rehypeRaw]}
        allowedElements={[
          'p',
          'b',
          'i',
          'em',
          'strong',
          'a',
          'li',
          'ul',
          'ol',
          'br'
        ]}
      >
        {event.description}
      </ReactMarkdown>
    </div>
  );
};

export default EventDescription;
