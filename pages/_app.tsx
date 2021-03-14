import React from 'react';
import type { AppProps } from 'next/app';
import '../components/stylesheets/global.css';

export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}
