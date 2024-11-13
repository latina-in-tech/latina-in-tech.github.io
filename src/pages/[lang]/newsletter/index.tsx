import React from 'react';
import { Newsletter } from '@/components/Newsletter';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { i18n, Locale } from 'i18n.config';
import { Dictionary, getDictionary } from '@/utils/dictionary';
import { GetStaticProps } from 'next';

type StaticProps = {
  translations: Dictionary;
};
export const getStaticProps: GetStaticProps = (async context => {
  const lang = context.params?.lang as string;
  const dictionary = await getDictionary(lang as Locale);
  return { props: { translations: dictionary } };
}) satisfies GetStaticProps<StaticProps>;

const NewsletterPage = ({ translations }: StaticProps) => {
  const router = useRouter();
  const locale = i18n.locales.filter(
    locale => router?.query.lang === locale
  )[0];

  return (
    <>
      <Header lang={locale} />
      <Newsletter translations={translations} />
    </>
  );
};

export default NewsletterPage;
