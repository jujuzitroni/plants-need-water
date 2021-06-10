import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AddHabit.module.css';

type AddHabitProps = {
  link: string;
};

function AddHabit({ link }: AddHabitProps): JSX.Element {
  return (
    <Link className={styles.addHabit} to={link}>
      Add new habit
    </Link>
  );
}

export default AddHabit;
