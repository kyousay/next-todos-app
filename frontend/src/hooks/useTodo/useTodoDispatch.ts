import { useContext } from 'react';
import { TodoDispatchContext } from './TodoProviderContainer';
import { TodoDispatch } from './useTodoCore';

export const useTodoDispatch = (): TodoDispatch => {
  return useContext(TodoDispatchContext);
};
