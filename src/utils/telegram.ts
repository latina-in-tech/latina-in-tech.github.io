export type TelegramGroupInfo = {
  members: number;
  online?: number;
};

const FETCH_TIMEOUT_MS = 10_000;

/**
 * telegram renders thousands with spaces (and sometimes narrow spaces),
 * so we just keep the digits
 */
const parseCount = (raw: string | undefined): number | undefined => {
  const digits = raw?.replace(/\D/g, '');
  return digits ? Number(digits) : undefined;
};

/**
 * reads the members / online counters from the public preview page of a
 * telegram group.
 *
 * this runs at build time (getStaticProps) on purpose: the browser cannot
 * fetch t.me directly because it serves no CORS headers, which is why this
 * used to go through a third party proxy. server side there is no CORS at
 * all, so no proxy is involved and the number is already in the HTML on
 * first paint.
 *
 * the counters are as fresh as the last deploy, and any failure is silent:
 * the caller gets `undefined` and hides the counter.
 */
export const fetchTelegramGroupInfo = async (
  telegramGroupUrl: string
): Promise<TelegramGroupInfo | undefined> => {
  if (!telegramGroupUrl) {
    return undefined;
  }
  try {
    const response = await fetch(telegramGroupUrl, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS)
    });
    if (!response.ok) {
      return undefined;
    }
    const html = await response.text();
    // warning: this depends on telegram's markup, which can change at any time
    const extra = /tgme_page_extra["'][^>]*>([^<]*)</i.exec(html)?.[1];
    if (!extra) {
      return undefined;
    }
    const members = parseCount(
      /([\d\s.,]+)(?:members|subscribers)/i.exec(extra)?.[1]
    );
    if (members === undefined) {
      return undefined;
    }
    return {
      members,
      online: parseCount(/([\d\s.,]+)online/i.exec(extra)?.[1])
    };
  } catch {
    return undefined;
  }
};
