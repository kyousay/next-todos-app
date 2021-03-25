import React from 'react';
import styles from './TodoStatusPanel.module.scss';
import classNames from 'classnames';
import { useTodoState } from '../../../hooks/useTodo/useTodoState';
import { useTodoDispatch } from '../../../hooks/useTodo/useTodoDispatch';

export const TodoStatusPanel: React.FC = () => {
  const { status } = useTodoState();
  const { handleChangeStatus } = useTodoDispatch();
  return (
    <div className={styles.root}>
      {['ALL', 'NOTYET', 'DONE'].map((text, index) => {
        return (
          <div
            key={status + text + index}
            className={classNames(styles.todo_status, {
              [styles['todo_active_status']]: text === status,
            })}
            onClick={() => handleChangeStatus(text)}>
            {text}
          </div>
        );
      })}
    </div>
  );
};
