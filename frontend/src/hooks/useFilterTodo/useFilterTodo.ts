import { useMemo } from 'react';
import { Todo } from '../../types/todo';
import { StatusString } from '../useTodo/useTodoCore';

export const useFilterTodo = (status: StatusString, todos: Todo[]): Todo[] => {
  return useMemo(
    () =>
      todos.reduce((acc: Todo[], cur) => {
        if (status === 'ALL') return [...acc, cur];
        if (status === 'DONE' && cur.checked) {
          return [...acc, cur];
        }
        if (status === 'NOTYET' && !cur.checked) {
          return [...acc, cur];
        }

        return acc;
      }, []),
    [status, todos],
  );
};
