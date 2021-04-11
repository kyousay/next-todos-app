import React from 'react';
import type { AppProps } from 'next/app';
import '../components/stylesheets/global.css';
import { Header } from '../components/atoms/Header/Header';
import { TodoProviderContainer } from '../hooks/useTodo/TodoProviderContainer';

export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <>
      <Header>Todo App</Header>
      <TodoProviderContainer>
        <Component {...pageProps} />
      </TodoProviderContainer>
    </>
  );
}
