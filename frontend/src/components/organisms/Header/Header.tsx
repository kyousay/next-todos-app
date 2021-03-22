import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
};

export default Header;
