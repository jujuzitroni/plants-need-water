import React from 'react';
import PlusIcon from '../../../components/Icons/PlusIcon';
import PageLink from '../../../components/PageLink/PageLink';
import SwipeDate from '../../../components/SwipeDate/SwipeDate';
import styles from './HabitList.module.css';

function HabitList(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        <h2>PLACEHOLDER</h2>
      </header>
      <main className={styles.main}>
        <SwipeDate />

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
