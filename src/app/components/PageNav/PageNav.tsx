import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './PageNav.module.css';

function getActiveClass(pathname: string): string | undefined {
  const location = useLocation();
  if (location.pathname === pathname) {
    return styles.tabs__active;
  }
  return styles.tabs__inactive;
}

function PageNav(): JSX.Element {
  return (
    <nav className={styles.tabs}>
      <Link className={getActiveClass('/')} to="/">
        today
      </Link>
      <Link className={getActiveClass('/calendar')} to="/calendar">
        calendar
      </Link>
    </nav>
  );
}

export default PageNav;
