import React, { useEffect, useMemo } from 'react';
import Header from '@/components/Header';
import EventsList from '@/components/event/EventsList';
import { GetStaticProps, NextPage } from 'next';
import { getAllEvents } from '@/utils/mdxUtils';
import { IEvent, sortEvents } from '@/model/event';
import Head from 'next/head';
import { i18n } from 'i18n.config';

const EventsPage = ({
  events
}: {
  events: [IEvent];
}) => {
  useEffect(() => {
    window.location.href = `/${i18n.defaultLocale}`
  }, [])

  return;
};

export default EventsPage;

export const getStaticProps: GetStaticProps = async () => {
  const events = getAllEvents();
  return { props: { events } };
};
