import React from 'react';
import styles from './TodoStatusChanger.module.scss';

type Props = {
  onClick: () => void;
};

export const TodoStatusChanger: React.FC<Props> = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={onClick}>
        ALL
      </button>
    </div>
  );
};
