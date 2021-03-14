import React from 'react';
import styles from './index.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.header_title}>Todo App</h1>
    </div>
  );
};

export default Header;
