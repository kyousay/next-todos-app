import React, { createContext } from 'react';
import { useTodoCore, TodoState, TodoDispatch } from './useTodoCore';

export const TodoStateContext = createContext<TodoState>(null);
export const TodoDispatchContext = createContext<TodoDispatch>(null);

export const TodoProviderContainer: React.FC = ({ children }) => {
  const { state, handleChangeStatus } = useTodoCore();
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={handleChangeStatus}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
