import React from 'react';
import { useTodoDispatch } from '../../../hooks/useTodo/useTodoDispatch';

export const Sample: React.FC = () => {
  const { handleChangeStatus } = useTodoDispatch();
  console.log('Render!');
  return <div></div>;
};
