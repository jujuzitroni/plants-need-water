import React from 'react';
import styles from './Habit.module.css';

function Habit(): JSX.Element {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <div className={styles.checkbox}>
          <input type="checkbox" />
        </div>
        <span>this is a habit</span>
      </div>
      <div className={styles.plantCard}></div>
    </article>
  );
}

export default Habit;
