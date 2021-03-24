import React from 'react';
import { storiesOf } from '@storybook/react';
import TodoForm from '..';
import { action } from '@storybook/addon-actions';

storiesOf('molecules/TodoForm', module).add('TodoForm', () => {
  const onSubmit = (id: string, name: string, text: string) => {
    action('onSubmit')({ id, name, text });
  };
  return <TodoForm onSubmit={onSubmit} />;
});
