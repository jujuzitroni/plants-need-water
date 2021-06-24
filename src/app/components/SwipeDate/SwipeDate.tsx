import React from 'react';
import styles from './SwipeDate.module.css';
import { format } from 'date-fns';

type SwipeDateProps = {
  dateString: string;
};

function SwipeDate({ dateString }: SwipeDateProps): JSX.Element {
  const date = new Date(dateString);
  const weekday = format(date, 'EEEE');
  const formattedDate = format(date, 'd.L.');

  return (
    <div className={styles.container}>
      <div className={styles.day}>{weekday}</div>
      <div className={styles.date}>{formattedDate}</div>
    </div>
  );
}

export default SwipeDate;
