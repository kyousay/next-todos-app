import React from 'react';
import { useTodoDispatch } from '../../../hooks/useTodo/useTodoDispatch';
import { useTodoState } from '../../../hooks/useTodo/useTodoState';
import { TodoStatusPanel } from './TodoStatusPanel';

export const Component: React.FC = () => {
  const { status } = useTodoState();
  const { handleChangeStatus } = useTodoDispatch();
  return (
    <TodoStatusPanel status={status} handleChangeStatus={handleChangeStatus} />
  );
};
