import React from 'react';
import styles from './HabitInput.module.css';

type HabitInputProps = {
  onNameChange: (name: string) => void;
  value: string;
};

function HabitInput({ value, onNameChange }: HabitInputProps): JSX.Element {
  return (
    <label className={styles.container}>
      Enter new habit
      <input
        value={value}
        className={styles.input}
        placeholder="E.g. take a break"
        onChange={(event) => onNameChange(event.target.value)}
      />
    </label>
  );
}

export default HabitInput;
