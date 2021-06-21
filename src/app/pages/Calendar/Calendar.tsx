import React from 'react';
import PageNav from '../../components/PageNav/PageNav';
import styles from './Calendar.module.css';

function Calendar(): JSX.Element {
  return (
    <div className={styles.calendar}>
      <header>
        <PageNav />
      </header>
      <main>
        <h2>Calendar Placeholder</h2>
      </main>
    </div>
  );
}

export default Calendar;
