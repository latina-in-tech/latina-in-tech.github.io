import Header from '@/components/Header';
import { filterPastEvents, IEvent, sortEvents } from '@/model/event';
import { getAllEvents } from '@/utils/mdxUtils';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useMemo, useState } from 'react';
import { DateTime } from 'luxon';
import { Rate } from '@/components/Rate';
import { Switch } from '@/components/Switch';
import { Radio } from '@/components/Radio';
import { TextArea } from '@/components/TextArea';
import { PaperAirplaneIcon, HomeIcon } from '@heroicons/react/24/outline';
import { saveFeedback } from '@/service/feedback/save';
import { Alert } from '@/components/Alert';
import { i18n } from 'i18n.config';

type Props = {
  events: [IEvent];
};

const NOT_CAME_REASONS = [
  'Motivi Personali',
  'Non ho avuto tempo ma avrei voluto',
  'Non mi interessava il programma',
  'Non ne sapevo nulla'
];

const MAX_RATE = 5;

const NewFeedback = () => {
  useEffect(() => {
    window.location.href = `/${i18n.defaultLocale}`
  }, [])

  return;
};

export default NewFeedback;

export const getStaticProps: GetStaticProps = async () => {
  const events = getAllEvents();
  return { props: { events } };
};
