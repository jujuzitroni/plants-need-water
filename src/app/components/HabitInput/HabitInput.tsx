import React from 'react';
import styles from './HabitInput.module.css';

type HabitInputProps = {
  onNameChange: (name: string) => void;
};

function HabitInput({ onNameChange }: HabitInputProps): JSX.Element {
  return (
    <label className={styles.container}>
      Enter new habit
      <input
        className={styles.input}
        placeholder="E.g. take a break"
        onChange={(event) => onNameChange(event.target.value)}
      />
    </label>
  );
}

export default HabitInput;
