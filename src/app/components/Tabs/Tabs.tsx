import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tabs.module.css';

function Tabs(): JSX.Element {
  return (
    <div className={styles.tabs}>
      <Link to="">today</Link>
      <Link to="">calendar</Link>
    </div>
  );
}

export default Tabs;
