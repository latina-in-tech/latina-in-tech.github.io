import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='dark:bg-slate-900 dark:text-slate-300'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
