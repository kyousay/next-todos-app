import React from 'react';
import { storiesOf } from '@storybook/react';
import { TodoList } from '../TodoList';

storiesOf('organisms/TodoList', module).add('TodoList', () => {
  const dummyTodos = [
    {
      id: 'rest0',
      text: 'rest1',
      name: 'rest1',
      checked: false,
    },
    {
      id: 'rest1',
      text: 'rest2',
      name: 'rest2',
      checked: true,
    },
  ];
  //TODO: 確認できるようにする SWRMock
  return <TodoList initialTodos={dummyTodos} />;
});
