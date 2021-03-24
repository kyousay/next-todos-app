import React, { useCallback } from 'react';

export type StatusString = 'ALL' | 'NOTYET' | 'DONE';

export type TodoState = {
  status: StatusString;
};

export type TodoDispatch = Omit<ReturnType<typeof useTodoCore>, 'state'>;

// Action
const changeStatus = (status: StatusString) => ({
  type: 'TODO/CHANGE_STATUS' as const,
  payload: {
    status,
  },
});

export type Action = ReturnType<typeof changeStatus>;

// InitialState
const initialStateFactory = (initialState?: Partial<TodoState>): TodoState => ({
  status: 'ALL',
  ...initialState,
});

// Reducer
const reducer = (state: TodoState, action: Action): TodoState => {
  switch (action.type) {
    case 'TODO/CHANGE_STATUS': {
      const { status } = action.payload;
      return {
        ...state,
        status,
      };
    }
    default: {
      return { ...state };
    }
  }
};

// UseTodoCore
export function useTodoCore(
  initialState?: Partial<TodoState>,
): {
  state: TodoState;
  handleChangeStatus: (status: StatusString) => void;
} {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialStateFactory(initialState),
  );
  const handleChangeStatus = useCallback(
    (status: StatusString) => {
      dispatch(changeStatus(status));
    },
    [dispatch],
  );

  return {
    state,
    handleChangeStatus,
  };
}
