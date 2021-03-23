import React from 'react';
import TodoList from './TodoList';
import { Todo } from '../../../types/todo';
import useCRUDTodo from '../../../Hooks/useCRUDTodo';

type Props = {
  initialTodos: Todo[];
};

const Component: React.FC<Props> = ({ initialTodos }) => {
  const {
    data,
    error,
    handleUpdateCheckbox,
    handleCreateTodo,
    handleDeleteTodo,
  } = useCRUDTodo(initialTodos);

  // todo: 場所と記述方法を考える
  if (error) return <div>Error</div>;

  const { todos } = data;

  return (
    <TodoList
      todos={todos}
      handleUpdateCheckbox={handleUpdateCheckbox}
      handleCreateTodo={handleCreateTodo}
      handleDeleteTodo={handleDeleteTodo}
    />
  );
};

export default Component;
