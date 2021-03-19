import React, { useCallback } from 'react';
import { Todo } from '../../types/todo';

// State
export type State = {
  todos: Todo[];
};

// Action
const changeTodo = (index: number, checked: boolean) => ({
  type: 'CHANGE_TODO' as const,
  payload: {
    index,
    checked,
  },
});

const createTodo = (id: string, name: string, text: string) => ({
  type: 'CREATE_TODO' as const,
  payload: {
    id,
    name,
    text,
  },
});

export type Action = ReturnType<typeof changeTodo | typeof createTodo>;

// InitialState
const initialStateFactory = (initialState?: Partial<State>): State => ({
  todos: [
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
  ],
  ...initialState,
});

// Reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'CHANGE_TODO': {
      const { index, checked } = action.payload;
      const newTodos = state.todos.map((todo, todoIndex) => {
        if (index !== todoIndex) return todo;
        return {
          ...todo,
          checked,
        };
      });
      return {
        ...state,
        todos: newTodos,
      };
    }
    case 'CREATE_TODO': {
      const { id, name, text } = action.payload;
      const newTodos = state.todos.concat({
        id,
        name,
        text,
        checked: false,
      });
      return {
        ...state,
        todos: newTodos,
      };
    }
    default: {
      return { ...state };
    }
  }
};

// UseTodoCore
const useTodoCore = (
  initialState?: Partial<State>,
): {
  state: State;
  handleChangeTodo: (index: number, checked: boolean) => void;
  handleCreateTodo: (id: string, name: string, text: string) => void;
} => {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialStateFactory(initialState),
  );
  const handleChangeTodo = useCallback(
    (index: number, checked: boolean) => {
      dispatch(changeTodo(index, checked));
    },
    [dispatch],
  );

  const handleCreateTodo = useCallback(
    (id: string, name: string, text: string) => {
      dispatch(createTodo(id, name, text));
    },
    [dispatch],
  );

  return {
    state,
    handleChangeTodo,
    handleCreateTodo,
  };
};

export default useTodoCore;
