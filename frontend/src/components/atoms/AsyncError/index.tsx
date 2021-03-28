import React from 'react';
import styles from './index.module.scss';

export const AsyncError: React.FC = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
