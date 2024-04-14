import React, { useEffect } from 'react';
import { Newsletter } from '@/components/Newsletter';
import Header from '@/components/Header';
import { i18n } from 'i18n.config';

const NewsletterPage = () => {
  useEffect(() => {
    window.location.href = `/${i18n.defaultLocale}`;
  }, []);

  return;
};

export default NewsletterPage;
