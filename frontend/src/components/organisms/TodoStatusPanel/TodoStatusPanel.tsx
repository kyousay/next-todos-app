import React from 'react';
import styles from './TodoStatusPanel.module.scss';
import classNames from 'classnames';
import { StatusString } from '../../../hooks/useTodo/useTodoCore';

type Props = {
  status: StatusString;
  handleChangeStatus: (text: string) => void;
};

export const TodoStatusPanel: React.FC<Props> = (props) => {
  const { status, handleChangeStatus } = props;
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
