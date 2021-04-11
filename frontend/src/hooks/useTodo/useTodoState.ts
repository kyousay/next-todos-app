import { useContext } from 'react';
import { TodoStateContext } from './TodoProviderContainer';
import { TodoState } from './useTodoCore';

export const useTodoState = (): TodoState => {
  return useContext(TodoStateContext);
};
