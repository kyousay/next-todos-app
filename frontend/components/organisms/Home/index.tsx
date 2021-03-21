import React, { useState, useCallback, useContext } from 'react';
import Home from './Home';
import {
  TodoStateContext,
  TodoDispatchContext,
} from '../../../context/TodoContext/TodoProviderContainer';
import axios from 'axios';
import useSWR from 'swr';

const axiosFetcher = async () => {
  const result = await axios.get<any>(
    'https://jsonplaceholder.typicode.com/comments/?_limit=10',
  );
  return result.data;
};

const Component: React.FC = () => {
  const { data, error } = useSWR('todoFetch', axiosFetcher);
  console.log(data);
  const { todos } = useContext(TodoStateContext);
  const { handleChangeTodo, handleCreateTodo } = useContext(
    TodoDispatchContext,
  );

  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [setInputValue],
  );

  const handleChangeCheckbox = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      handleChangeTodo(index, e.target.checked);
    },
    [handleChangeTodo],
  );

  const handleCreateTodos = useCallback(
    (id: string, name: string, text: string) => {
      handleCreateTodo(id, name, text);
    },
    [handleCreateTodo],
  );
  return (
    <Home
      todos={todos}
      inputValue={inputValue}
      changeInputHandler={handleChangeInput}
      changeCheckboxHandler={handleChangeCheckbox}
      createTodoHandler={handleCreateTodos}
    />
  );
};

export default Component;
