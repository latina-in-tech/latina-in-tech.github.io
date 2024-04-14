import React from 'react';
import { Newsletter } from '@/components/Newsletter';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { i18n } from 'i18n.config';

const NewsletterPage = () => {
  const router = useRouter()
  const locale = i18n.locales.filter(locale => router?.query.lang === locale)[0]

  return (
    <>
      <Header lang={locale} />
      <Newsletter />
    </>
  )
};

export default NewsletterPage;
