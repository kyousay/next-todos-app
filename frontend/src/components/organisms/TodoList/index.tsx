import React from 'react';
import { TodoList } from './TodoList';
import { Todo } from '../../../types/todo';
import { useCRUDTodo } from '../../../hooks/useCRUDTodo';
import { useTodoState } from '../../../hooks/useTodo/useTodoState';
import { useFilterTodo } from '../../../hooks/useFilterTodo';

type Props = {
  initialTodos: Todo[];
};

export const Component: React.FC<Props> = ({ initialTodos }) => {
  const {
    data,
    error,
    handleUpdateCheckbox,
    handleCreateTodo,
    handleDeleteTodo,
  } = useCRUDTodo(initialTodos);

  const { status } = useTodoState();

  if (error) return <div>Error</div>;

  const { todos } = data;

  const filterdTodos = useFilterTodo(status, todos);

  return (
    <TodoList
      todos={filterdTodos}
      handleUpdateCheckbox={handleUpdateCheckbox}
      handleCreateTodo={handleCreateTodo}
      handleDeleteTodo={handleDeleteTodo}
    />
  );
};
