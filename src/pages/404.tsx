'use client';
import React from 'react';
import { i18n } from '../../i18n.config';

const oldPaths = [
  '/',
  '/admins/team',
  '/events/\\d+',
  '/feedback/new',
  '/newsletter',
  '/community'
].map(p => {
  if (p === '/') {
    return new RegExp(`^${p}$`);
  }

  return new RegExp(`^${p}`);
});

const useBackRouteCompatibility = () => {
  React.useEffect(() => {
    const { pathname } = window.location;
    if (oldPaths.some(p => p.test(pathname))) {
      window.location.replace(`/${i18n.defaultLocale}${pathname}`);
    }
  }, []);
};

export default function Custom404() {
  const [isNeedToRedirect, setIsNeedToRedirect] = React.useState(false);
  useBackRouteCompatibility();

  React.useEffect(() => {
    setIsNeedToRedirect(oldPaths.some(p => p.test(window.location.pathname)));
  }, []);

  if (isNeedToRedirect) {
    return <div id='loader'></div>;
  }

  return <h1>404 - Page Not Found</h1>;
}
