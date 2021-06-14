import React from 'react';
import styles from './HabitInput.module.css';

function HabitInput(): JSX.Element {
  return (
    <label className={styles.container}>
      Enter new habit
      <input className={styles.input} placeholder="E.g. take a break" />
    </label>
  );
}

export default HabitInput;
