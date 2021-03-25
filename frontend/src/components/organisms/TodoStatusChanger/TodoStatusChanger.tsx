import React from 'react';
import styles from './TodoStatusChanger.module.scss';
import { useTodoDispatch } from '../../../hooks/useTodo/useTodoDispatch';

export const TodoStatusChanger: React.FC = () => {
  const { handleChangeStatus } = useTodoDispatch();
  return (
    <div className={styles.root}>
      <button
        className={styles.button}
        onClick={() => handleChangeStatus('ALL')}>
        ALL
      </button>
    </div>
  );
};
