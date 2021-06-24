import React from 'react';
import PlusIcon from '../../components/Icons/PlusIcon';
import PageLink from '../../components/PageLink/PageLink';
import SwipeDate from '../../components/SwipeDate/SwipeDate';
import styles from './HabitList.module.css';
import { Habit } from '../../App';
import PageNav from '../../components/PageNav/PageNav';
import HabitListPlaceholder from '../../components/HabitListPlaceholder/HabitListPlaceholder';
import HabitItem from '../../components/HabitItem/HabitItem';
import HabitPlant from '../../components/HabitPlant/HabitPlant';
import { getDateString } from '../../utils';

type HabitListProps = {
  habits: Habit[];
};

function HabitList({ habits }: HabitListProps): JSX.Element {
  const date = new Date();
  const dateString = getDateString(date);

  function toListElement(habit: Habit): JSX.Element {
    function onHabitCheck() {
      if (!habit.datesCompleted.includes(dateString)) {
        habit.datesCompleted.push(dateString);
      } else {
        habit.datesCompleted = habit.datesCompleted.filter(
          (item) => item !== dateString
        );
      }
    }

    return (
      <li key={habit.id}>
        <HabitItem
          name={habit.name}
          color={habit.color}
          onHabitCheck={onHabitCheck}
        >
          <HabitPlant rating={habit.datesCompleted.length} />
        </HabitItem>
      </li>
    );
  }

  return (
    <div className={styles.container}>
      <header>
        <PageNav />
      </header>
      <main className={styles.main}>
        <SwipeDate dateString={dateString} />

        {habits.length ? (
          <ul className={styles.habitList}>{habits.map(toListElement)}</ul>
        ) : (
          <HabitListPlaceholder />
        )}

        <PageLink variant="plus" link="/create-habit">
          <PlusIcon />
        </PageLink>
      </main>
      <footer className={styles.footer}>
        <PageLink variant="about" link="">
          <span>about plants need water</span>
        </PageLink>
      </footer>
    </div>
  );
}

export default HabitList;
