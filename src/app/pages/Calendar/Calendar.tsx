import React from 'react';
import PageNav from '../../components/PageNav/PageNav';
import styles from './Calendar.module.css';
import Calendar from 'react-calendar';

function CalendarPage(): JSX.Element {
  return (
    <div>
      <header>
        <PageNav />
      </header>
      <main className={styles.container}>
        <Calendar
          className={styles.cal}
          tileClassName={styles.tile}
          showNavigation={true}
        />
      </main>
    </div>
  );
}

export default CalendarPage;
