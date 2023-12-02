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

const NewFeedback: NextPage<Props> = ({ events: events }: Props) => {
  const pastEvents = useMemo(() => filterPastEvents(events), [events]);

  const lastEvent = sortEvents(pastEvents)[0];

  const [hasPartecipatedLastEvent, setHasPartecipatedLastEvent] =
    useState(false);
  const [notCameReason, setNotCameReason] = useState(NOT_CAME_REASONS[0]);
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
    } catch (e) {
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
          content='Lascia un feedback sulla tua esperienza con Latina In Tech!'
        />
        <meta
          name='keywords'
          content='Latina, User Group, Lazio, Roma, Sviluppatori Latina, Latina In Tech, LiT'
        ></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='flex flex-col gap-6 px-4 pb-4 sm:mt-8'>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-bold dark:text-slate-200 sm:text-4xl'>
            Feedback
          </h2>
          <p className='mx-auto mt-2 max-w-2xl text-m text-center text-gray-500 dark:text-slate-400 sm:mt-4'>
            Partecipa attivamente alla vita della community esprimendo la tua
            opinione su quanto portato avanti finora e su come migliorarlo
          </p>

          <div className='flex flex-col items-center gap-4 mt-8'>
            <div className='flex flex-col gap-4 justify-center items-center'>
              <p className='text-center font-bold'>
                Hai partecipato all&apos;ultimo evento, <i>{lastEvent.title}</i>
                &nbsp;di&nbsp;
                {DateTime.fromISO(lastEvent.date).toLocaleString(
                  DateTime.DATE_HUGE
                )}
                ?
              </p>
              <Switch
                checked={hasPartecipatedLastEvent}
                label={hasPartecipatedLastEvent ? 'Si' : 'No'}
                onChange={() => {
                  setHasPartecipatedLastEvent(!hasPartecipatedLastEvent);
                }}
              />
            </div>

            {hasPartecipatedLastEvent && (
              <>
                <div className='flex flex-col gap-4 justify-center items-center'>
                  <p className='text-center font-bold'>
                    Quanto è stato interessante l&apos;evento?
                  </p>
                  <Rate
                    rate={eventRate}
                    maxRate={MAX_RATE}
                    setRate={newRate => setEventRate(newRate)}
                  />
                </div>

                <div className='flex flex-col gap-4 justify-center items-center'>
                  <p className='text-center font-bold'>
                    C&apos;è qualcosa che ti ha particolarmente colpito durante
                    l&apos;evento?
                  </p>
                  <Switch
                    checked={hasLearned}
                    label={hasLearned ? 'Si' : 'No'}
                    onChange={() => {
                      setHasLearned(!hasLearned);
                    }}
                  />
                </div>

                {hasLearned && (
                  <div className='flex flex-col gap-4 justify-center items-center'>
                    <p className='text-center font-bold'>
                      Per favore, descrivi brevemente la cosa più interessante
                      dello scorso evento:
                    </p>
                    <TextArea
                      content={mostImpressive}
                      onChange={newVal => setMostImpressive(newVal)}
                      placeholder='Cosa ti ha colpito di più?'
                    />
                  </div>
                )}
              </>
            )}

            {!hasPartecipatedLastEvent && (
              <div className='flex flex-col gap-4 justify-center items-center'>
                <p className='text-center font-bold'>
                  Ci dispiace che non ci sei stato, puoi dirci il motivo?
                </p>
                <Radio
                  options={NOT_CAME_REASONS}
                  selected={notCameReason}
                  onSelected={selected => setNotCameReason(selected)}
                />
              </div>
            )}

            <div className='flex flex-col gap-4 justify-center items-center'>
              <p className='text-center font-bold'>
                Complessivamente quanto sei soddisfatto della community?
              </p>
              <Rate
                rate={generalRate}
                maxRate={MAX_RATE}
                setRate={newRate => setGeneralRate(newRate)}
              />
            </div>

            <div className='flex flex-col gap-4 justify-center items-center'>
              <p className='text-center font-bold'>
                Hai dei consigli generali per migliorare la community?
              </p>
              <TextArea
                content={generalHints}
                onChange={newVal => setGeneralHints(newVal)}
                placeholder='Scrivi ulteriori feedback...'
              />
            </div>

            {showSuccess && (
              <Alert
                title='Grazie!'
                onGoBackToHome={() => (window.location.href = './../')}
                content='Abbiamo ricevuto il tuo feedback, grazie del contributo alla community! Puoi tornare alla Home.'
                type='success'
                onDismiss={() => setShowSuccess(false)}
              />
            )}

            {sentFeedback && (
              <button
                onClick={() => (window.location.href = './../')}
                className='flex items-center justify-between gap-2 rounded-md mt-4 mb-4 border border-transparent bg-primary bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm backdrop-blur-sm hover:bg-primary-light sm:px-8'
              >
                Torna Indietro
                <HomeIcon className='h-6 w-6' />
              </button>
            )}

            {showError && (
              <Alert
                title='Errore'
                content='Impossibile salvare feedback, si prega di riprovare'
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
                Invia Feedback
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

export const getStaticProps: GetStaticProps = async () => {
  const events = getAllEvents([
    'title',
    'slug',
    'date',
    'description',
    'thumbnail',
    'duration',
    'youtubeUrl',
    'place',
    'maps'
  ]);
  return { props: { events } };
};
