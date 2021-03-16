import React, { useState, useCallback } from 'react';
import Home from './Home';

const Component: React.FC = () => {
  // TODO: 後でContextで代替
  const [dummyTodos, setDummyTodos] = useState([
    {
      id: '1',
      text: 'test1',
      name: 'test1',
      checked: false,
    },
    {
      id: '2',
      text: 'test2',
      name: 'test2',
      checked: true,
    },
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [],
  );

  const handleChangeCheckbox = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const updateddummyTodos = [...dummyTodos];
      updateddummyTodos[index].checked = e.target.checked;
      setDummyTodos(updateddummyTodos);
    },
    [dummyTodos, setDummyTodos],
  );

  const handleCreateTodo = useCallback(
    (id: string, text: string, name: string) => {
      setDummyTodos([...dummyTodos].concat({ id, text, name, checked: false }));
    },
    [dummyTodos],
  );
  return (
    <Home
      todos={dummyTodos}
      inputValue={inputValue}
      changeInputHandler={handleChangeInput}
      changeCheckboxHandler={handleChangeCheckbox}
      createTodoHandler={handleCreateTodo}
    />
  );
};

export default Component;
