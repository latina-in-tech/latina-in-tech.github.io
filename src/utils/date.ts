import { DateTime } from 'luxon';
import { Locale } from 'i18n.config';

/**
 * every date handled by the site comes from the event front matter as an ISO
 * string. luxon is confined to this module: components deal with ISO strings
 * and with the formatting helpers below, never with DateTime objects.
 */

const parse = (isoDate: string): DateTime => DateTime.fromISO(isoDate);

const localized = (isoDate: string, locale: Locale): DateTime =>
  parse(isoDate).setLocale(locale);

export const isInThePast = (isoDate: string): boolean =>
  parse(isoDate) < DateTime.now();

/**
 * negative when the first date comes first, so it can be handed to sort()
 */
export const compareDates = (isoDateA: string, isoDateB: string): number =>
  parse(isoDateA).toMillis() - parse(isoDateB).toMillis();

/** mer 29 lug 2026 */
export const formatShortDate = (isoDate: string, locale: Locale): string =>
  localized(isoDate, locale).toLocaleString({
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

/** mercoledì 29 luglio 2026 */
export const formatLongDate = (isoDate: string, locale: Locale): string =>
  localized(isoDate, locale).toLocaleString({
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

/** 18:30 */
export const formatTime = (isoDate: string, locale: Locale): string =>
  localized(isoDate, locale).toLocaleString(DateTime.TIME_SIMPLE);

/** mer 29 lug 2026, 18:30 */
export const formatDateTime = (isoDate: string, locale: Locale): string =>
  localized(isoDate, locale).toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);

export type CalendarSlot = {
  /** yyyy-MM-dd */
  date: string;
  /** HH:mm */
  startTime: string;
  /** HH:mm */
  endTime: string;
};

/**
 * date and times in the shape expected by the add to calendar button
 */
export const toCalendarSlot = (
  isoDate: string,
  durationInMinutes: number
): CalendarSlot => {
  const start = parse(isoDate);
  const end = start.plus({ minutes: durationInMinutes });
  return {
    date: start.toFormat('yyyy-MM-dd'),
    startTime: start.toFormat('HH:mm'),
    endTime: end.toFormat('HH:mm')
  };
};
