import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TodoList } from '../TodoList';
import { Todo } from '../../../../types/todo';
import { action } from '@storybook/addon-actions';

storiesOf('organisms/TodoList', module).add('TodoList', () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '0',
      name: 'test1',
      text: 'test1',
      checked: false,
    },
    {
      id: '1',
      name: 'test2',
      text: 'test2',
      checked: true,
    },
  ]);
  const handleCreateTodo = (id: string, name: string, text: string) => {
    setTodos([...todos, { id, name, text, checked: false }]);
    action('handleCreateTodo')(todos);
  };
  const handleUpdateCheckbox = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
    action('handleUpdateTodo')(todos);
  };
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    action('handleDeleteTodo')(todos);
  };
  return (
    <TodoList
      todos={todos}
      handleUpdateCheckbox={handleUpdateCheckbox}
      handleCreateTodo={handleCreateTodo}
      handleDeleteTodo={handleDeleteTodo}
    />
  );
});
