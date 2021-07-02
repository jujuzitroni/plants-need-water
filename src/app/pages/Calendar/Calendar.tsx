import React from 'react';
import PageNav from '../../components/PageNav/PageNav';
import styles from './Calendar.module.css';
import Calendar, { CalendarTileProperties } from 'react-calendar';
import { Habit } from '../../App';
import { getDateString } from '../../utils';
import { useHistory } from 'react-router';
import TileColors from '../../components/TileColors/TileColors';

type CalendarPageProps = {
  habits: Habit[];
};

function CalendarPage({ habits }: CalendarPageProps): JSX.Element {
  const history = useHistory();

  function tileContent({ date, view }: CalendarTileProperties) {
    if (view !== 'month') {
      return null;
    }

    const dateString = getDateString(date);
    const habitsOnThisDate = habits.filter((habit) =>
      habit.datesCompleted.includes(dateString)
    );
    const colorsOnThisDate = habitsOnThisDate.map((habit) => habit.color);
    return <TileColors colors={colorsOnThisDate} />;
  }

  function goToHabitList(date: Date) {
    const timestamp = date.getTime();
    history.push(`/habits/${timestamp}`);
  }

  return (
    <div>
      <header>
        <PageNav />
      </header>
      <main className={styles.container}>
        <Calendar
          className={styles.calendar}
          tileClassName={styles.tile}
          tileContent={tileContent}
          onClickDay={goToHabitList}
        />
      </main>
    </div>
  );
}

export default CalendarPage;
