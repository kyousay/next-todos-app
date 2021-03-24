import { useContext } from 'react';
import { TodoDispatchContext } from './TodoProviderContainer';
import { TodoDispatch } from './useTodoCore';

export function useTodoDispatch(): TodoDispatch {
  return useContext(TodoDispatchContext);
}
