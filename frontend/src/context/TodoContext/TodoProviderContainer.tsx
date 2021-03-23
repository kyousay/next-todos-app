import React, { createContext } from 'react';
import useTodoCore, { State } from './useTodoCore';

export const TodoStateContext = createContext<State>(null);
export const TodoDispatchContext = createContext<
  Omit<ReturnType<typeof useTodoCore>, 'state'>
>(null);

const TodoProviderContainer: React.FC = ({ children }) => {
  const { state, handleChangeTodo, handleCreateTodo } = useTodoCore();
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider
        value={{ handleChangeTodo, handleCreateTodo }}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoProviderContainer;
