import React from 'react';
import styles from './SwipeDate.module.css';
import { format } from 'date-fns';

export default function SwipeDate(): JSX.Element {
  const date = new Date();
  const weekday = format(date, 'EEEE');
  const formattedDate = format(date, 'd.L.');

  return (
    <div className={styles.container}>
      <div className={styles.day}>{weekday}</div>
      <div className={styles.date}>{formattedDate}</div>
    </div>
  );
}
