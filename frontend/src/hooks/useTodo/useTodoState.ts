import { useContext } from 'react';
import { TodoStateContext } from './TodoProviderContainer';
import { TodoState } from './useTodoCore';

export function useTodoState(): TodoState {
  return useContext(TodoStateContext);
}
