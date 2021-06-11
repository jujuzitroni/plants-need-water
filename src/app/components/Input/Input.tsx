import React from 'react';
import styles from './Input.module.css';

function Input(): JSX.Element {
  return (
    <label className={styles.container}>
      Enter new habit:
      <input className={styles.input} />
    </label>
  );
}

export default Input;
