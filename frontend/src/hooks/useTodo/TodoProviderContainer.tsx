import React, { createContext, useMemo } from 'react';
import { useTodoCore, TodoState, TodoDispatch } from './useTodoCore';

export const TodoStateContext = createContext<TodoState>(null);
export const TodoDispatchContext = createContext<TodoDispatch>(null);

export const TodoProviderContainer: React.FC = ({ children }) => {
  const { state, handleChangeStatus } = useTodoCore();
  const contextState = useMemo(() => state, [state]);
  const contextDispatch = useMemo(() => {
    return { handleChangeStatus };
  }, [handleChangeStatus]);
  return (
    <TodoStateContext.Provider value={contextState}>
      <TodoDispatchContext.Provider value={contextDispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
