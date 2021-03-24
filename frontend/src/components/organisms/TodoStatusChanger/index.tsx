import React, { useCallback } from 'react';
import { useTodoDispatch } from '../../../hooks/useTodo/useTodoDispatch';
import { TodoStatusChanger } from './TodoStatusChanger';

export const Component: React.FC = () => {
  const { handleChangeStatus } = useTodoDispatch();
  const handleOnClick = useCallback(() => {
    handleChangeStatus('ALL');
  }, []);
  return <TodoStatusChanger onClick={handleOnClick} />;
};
