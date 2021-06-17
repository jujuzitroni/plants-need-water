import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Tabs.module.css';

function getActiveClass(pathname: string): string | undefined {
  const location = useLocation();
  if (!location.pathname.includes(pathname)) {
    return;
  }
  return styles.tabs__active;
}

function Tabs(): JSX.Element {
  return (
    <div className={styles.tabs}>
      <Link className={getActiveClass('/home')} to="/home">
        today
      </Link>
      <Link className={getActiveClass('/about')} to="/about">
        calendar
      </Link>
    </div>
  );
}

export default Tabs;
