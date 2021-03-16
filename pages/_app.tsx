import React from 'react';
import type { AppProps } from 'next/app';
import '../components/stylesheets/global.css';
import Header from '../components/organisms/Header/Header';

export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <>
      <Header>Todo App</Header>
      <Component {...pageProps} />
    </>
  );
}
