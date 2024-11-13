import Header from '@/components/Header';
import { filterPastEvents, IEvent, sortEvents } from '@/model/event';
import { getAllEvents } from '@/utils/mdxUtils';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import { DateTime } from 'luxon';
import { Rate } from '@/components/Rate';
import { Switch } from '@/components/Switch';
import { Radio } from '@/components/Radio';
import { TextArea } from '@/components/TextArea';
import { PaperAirplaneIcon, HomeIcon } from '@heroicons/react/24/outline';
import { saveFeedback } from '@/service/feedback/save';
import { Alert } from '@/components/Alert';
import { i18n, Locale } from 'i18n.config';
import { useRouter } from 'next/router';
import { getAllLocales } from '@/utils/locale';
import { Dictionary, getDictionary } from '@/utils/dictionary';

type Props = {
  events: [IEvent];
  translations: Dictionary;
};

type NotCameReason = keyof Dictionary['feedback']['notCameReasons'];
const NOT_CAME_REASONS: NotCameReason[] = [
  'PERSONAL',
  'NO_TIME_BUT_WANTED',
  'NO_INTEREST',
  'DID_NOT_KNOW'
];

const MAX_RATE = 5;

const NewFeedback: NextPage<Props> = ({ events, translations }: Props) => {
  const router = useRouter();
  const locale = i18n.locales.filter(
    locale => router?.query.lang === locale
  )[0];

  const localizedNotCameReasons = NOT_CAME_REASONS.map(
    reason => translations.feedback.notCameReasons[reason]
  );

  const pastEvents = useMemo(() => filterPastEvents(events), [events]);

  const lastEvent = sortEvents(pastEvents)[0];

  const [hasPartecipatedLastEvent, setHasPartecipatedLastEvent] =
    useState(false);
  const [notCameReason, setNotCameReason] = useState(
    localizedNotCameReasons[0]
  );
  const [generalRate, setGeneralRate] = useState(0);
  const [eventRate, setEventRate] = useState(0);
  const [hasLearned, setHasLearned] = useState(false);
  const [mostImpressive, setMostImpressive] = useState('');
  const [generalHints, setGeneralHints] = useState('');

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [sentFeedback, setSentFeedback] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendFeedback = async () => {
    setIsLoading(true);
    try {
      await saveFeedback({
        hasPartecipatedLastEvent,
        notCameReason,
        generalHints,
        generalRate,
        eventRate,
        hasLearned,
        mostImpressive
      });
      setShowSuccess(true);
      setShowError(false);
      setSentFeedback(true);
    } catch {
      setShowSuccess(false);
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>LiT - Feedback</title>
        <meta
          name='description'
          content={translations.feedback.metaDescription}
        />
        <meta
          name='keywords'
          content='Latina, User Group, Lazio, Roma, Sviluppatori Latina, Latina In Tech, LiT'
        ></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header lang={locale} />
      <main className='flex flex-col gap-6 px-4 pb-4 sm:mt-8'>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-bold dark:text-slate-200 sm:text-4xl'>
            {translations.feedback.feedback}
          </h2>
          <p className='mx-auto mt-2 max-w-2xl text-m text-center text-gray-500 dark:text-slate-400 sm:mt-4'>
            {translations.feedback.partecipateActively}
          </p>

          <div className='flex flex-col items-center gap-4 mt-8'>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <p className='text-center font-bold'>
                {translations.feedback.didYouAttendLastEvent}
                <i>{lastEvent.title}</i>
                {translations.feedback.of}
                {DateTime.fromISO(lastEvent.date).toLocaleString(
                  DateTime.DATE_HUGE,
                  { locale }
                )}
                ?
              </p>
              <Switch
                checked={hasPartecipatedLastEvent}
                label={
                  hasPartecipatedLastEvent
                    ? translations.feedback.yes
                    : translations.feedback.no
                }
                onChange={() => {
                  setHasPartecipatedLastEvent(!hasPartecipatedLastEvent);
                }}
              />
            </div>
            {hasPartecipatedLastEvent && (
              <>
                <div className='flex flex-col gap-4 justify-center items-center'>
                  <p className='text-center font-bold'>
                    {translations.feedback.howWouldYouRateEvent}
                  </p>
                  <Rate
                    rate={eventRate}
                    maxRate={MAX_RATE}
                    setRate={newRate => setEventRate(newRate)}
                  />
                </div>

                <div className='flex flex-col gap-4 justify-center items-center'>
                  <p className='text-center font-bold'>
                    {translations.feedback.isThereAnythingYouLiked}
                  </p>
                  <Switch
                    checked={hasLearned}
                    label={
                      hasLearned
                        ? translations.feedback.yes
                        : translations.feedback.no
                    }
                    onChange={() => {
                      setHasLearned(!hasLearned);
                    }}
                  />
                </div>

                {hasLearned && (
                  <div className='flex flex-col gap-4 justify-center items-center'>
                    <p className='text-center font-bold'>
                      {translations.feedback.describeShortMostInteresting}
                    </p>
                    <TextArea
                      content={mostImpressive}
                      onChange={newVal => setMostImpressive(newVal)}
                      placeholder={translations.feedback.whatYouLikedMost}
                    />
                  </div>
                )}
              </>
            )}
            {!hasPartecipatedLastEvent && (
              <div className='flex flex-col gap-4 justify-center items-center'>
                <p className='text-center font-bold'>
                  {translations.feedback.weAreSorryYouDidNotAttend}
                </p>
                <Radio
                  options={localizedNotCameReasons}
                  selected={notCameReason}
                  onSelected={selected => setNotCameReason(selected)}
                />
              </div>
            )}

            <div className='flex flex-col gap-4 justify-center items-center'>
              <p className='text-center font-bold'>
                {translations.feedback.howMuchAreYouSatisfied}
              </p>
              <Rate
                rate={generalRate}
                maxRate={MAX_RATE}
                setRate={newRate => setGeneralRate(newRate)}
              />
            </div>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <p className='text-center font-bold'>
                {translations.feedback.doYouHaveSuggestions}
              </p>
              <TextArea
                content={generalHints}
                onChange={newVal => setGeneralHints(newVal)}
                placeholder={translations.feedback.writeAdditionalFeedback}
              />
            </div>
            {showSuccess && (
              <Alert
                title={translations.feedback.thankYou}
                onGoBackToHome={() => (window.location.href = './../')}
                content={translations.feedback.weReceivedYourFeedback}
                type='success'
                onDismiss={() => setShowSuccess(false)}
              />
            )}
            {sentFeedback && (
              <button
                onClick={() => (window.location.href = './../')}
                className='flex items-center justify-between gap-2 rounded-md mt-4 mb-4 border border-transparent bg-primary bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm hover:bg-primary-light sm:px-8'
              >
                {translations.feedback.goBack}
                <HomeIcon className='h-6 w-6' />
              </button>
            )}
            {showError && (
              <Alert
                title={translations.feedback.errorTitle}
                content={translations.feedback.errorDesc}
                type='error'
                onDismiss={() => setShowError(false)}
              />
            )}
            {!sentFeedback && (
              <button
                disabled={isLoading}
                onClick={sendFeedback}
                className='flex items-center justify-between gap-2 rounded-md mt-4 mb-4 border border-transparent bg-primary bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm hover:bg-primary-light sm:px-8'
              >
                {translations.feedback.sendFeedback}
                <PaperAirplaneIcon className='h-6 w-6' />
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default NewFeedback;

export const getStaticPaths = async () => {
  const locales = getAllLocales();

  return {
    paths: locales.map(locale => {
      return {
        params: {
          lang: locale
        }
      };
    }),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const lang = context.params?.lang as string;
  const translations = await getDictionary(lang as Locale);
  const events = getAllEvents();
  return { props: { events, translations } };
};
