import React from 'react';
import PageNav from '../../components/PageNav/PageNav';
import styles from './CalendarPage.module.css';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import { Habit } from '../../App';
import { getDateString } from '../../utils';
import { useHistory } from 'react-router';
import TileColors from '../../components/TileColors/TileColors';
import { addHours } from 'date-fns';
import PageLink from '../../components/PageLink/PageLink';
import { subHours } from 'date-fns/esm';

type CalendarPageProps = {
  habits: Habit[];
};

function CalendarPage({ habits }: CalendarPageProps): JSX.Element {
  const history = useHistory();

  function tileContent({ date, view }: CalendarTileProperties) {
    if (view !== 'month') {
      return null;
    }

    // account for timezone
    const dateString = getDateString(addHours(date, 2));
    const habitsOnThisDate = habits.filter((habit) =>
      habit.datesCompleted.includes(dateString)
    );
    const colorsOnThisDate = habitsOnThisDate.map((habit) => habit.color);
    return <TileColors colors={colorsOnThisDate} />;
  }

  function goToHabitList(date: Date) {
    // account for timezone
    const timestamp = addHours(date, 2).getTime();
    history.push(`/habits/${timestamp}`);
  }

  return (
    <div className={styles.container}>
      <header>
        <PageNav />
      </header>
      <main className={styles.main}>
        <Calendar
          className={styles.calendar}
          tileClassName={styles.tile}
          tileContent={tileContent}
          onClickDay={goToHabitList}
        />
      </main>
      <footer className={styles.footer}>
        <PageLink variant="about" link="/about">
          <span>about plants need water</span>
        </PageLink>
      </footer>
    </div>
  );
}

export default CalendarPage;
