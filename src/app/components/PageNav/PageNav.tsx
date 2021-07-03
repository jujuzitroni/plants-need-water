import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './PageNav.module.css';

function PageNav(): JSX.Element {
  const location = useLocation();

  return (
    <nav className={styles.tabs}>
      <Link
        className={
          location.pathname !== '/calendar'
            ? styles.tabs__active
            : styles.tabs__inactive
        }
        to="/"
      >
        list
      </Link>
      <Link
        className={
          location.pathname === '/calendar'
            ? styles.tabs__active
            : styles.tabs__inactive
        }
        to="/calendar"
      >
        calendar
      </Link>
    </nav>
  );
}

export default PageNav;
