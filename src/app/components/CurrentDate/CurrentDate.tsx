import React from 'react';
import styles from './CurrentDate.module.css';
import { format } from 'date-fns';

type CurrentDateProps = {
  dateString: string;
};

function CurrentDate({ dateString }: CurrentDateProps): JSX.Element {
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

export default CurrentDate;
