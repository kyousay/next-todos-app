import { useCallback } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { Todo } from '../types/todo';

const axiosFetcher = async () => {
  const result = await axios.get<{ todos: Todo[] }>('/todos');
  return result.data;
};

const useCRUDTodo = (
  initialTodos: Todo[],
): {
  data: { todos: Todo[] };
  // TODO: Errorの型をつける
  // TODO: Loadingの型をつける＆実装をする
  error;
  handleUpdateCheckbox: typeof handleUpdateCheckbox;
  handleCreateTodo: typeof handleCreateTodo;
  handleDeleteTodo: typeof handleDeleteTodo;
} => {
  const { data, error, mutate } = useSWR('todoFetch', axiosFetcher, {
    initialData: {
      todos: initialTodos,
    },
  });

  const handleUpdateCheckbox = useCallback(
    async (id: string) => {
      const updatedTodo = data.todos.filter((todo) => todo.id === id)[0];
      const todoData = {
        ...updatedTodo,
        checked: !updatedTodo.checked,
      };
      await axios.patch(`/todos/update/${id}`, {
        todoData,
      });
      mutate({
        ...data,
        todos: data.todos.map((todo) => (todo.id === id ? todoData : todo)),
      });
    },
    [data.todos],
  );

  const handleCreateTodo = useCallback(
    async (id: string, name: string, text: string) => {
      const todoData = {
        id,
        name,
        text,
        checked: false,
      };
      await axios.post('/todos/create', {
        todoData,
      });
      mutate({
        ...data,
        todos: data.todos.concat([todoData]),
      });
    },
    [data.todos],
  );

  const handleDeleteTodo = useCallback(
    async (id: string) => {
      await axios.delete(`/todos/delete/${id}`);
      mutate({
        ...data,
        todos: data.todos.filter((todo) => todo.id !== id),
      });
    },
    [data.todos],
  );

  return {
    data,
    error,
    handleUpdateCheckbox,
    handleCreateTodo,
    handleDeleteTodo,
  };
};

export default useCRUDTodo;
