import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../Header';

storiesOf('atoms/Header', module).add('Header', () => {
  return <Header>Todo App</Header>;
});
