import React from 'react';
import PlusIcon from '../../components/Icons/PlusIcon';
import PageLink from '../../components/PageLink/PageLink';
import SwipeDate from '../../components/SwipeDate/SwipeDate';
import styles from './HabitList.module.css';
import { Habit } from '../../App';

type HabitListProps = {
  habits: Habit[];
};

function toListElement(habit: Habit): JSX.Element {
  return (
    <li key={habit.id}>
      <input type="checkbox" /> {habit.name}
      <div
        className={styles.habitColor}
        style={{ backgroundColor: habit.color }}
      />
    </li>
  );
}

function HabitList({ habits }: HabitListProps): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        <h2>PLACEHOLDER</h2>
      </header>
      <main className={styles.main}>
        <SwipeDate />
        <ul>{habits.map(toListElement)}</ul>

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
