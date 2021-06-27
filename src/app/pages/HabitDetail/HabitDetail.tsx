import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import styles from './HabitDetail.module.css';

function HabitDetail(): JSX.Element {
  return (
    <div className={styles.DetailPage}>
      <header>
        <BackButton />
      </header>
      <main>
        <p>coming soon</p>
      </main>
      <footer>
        <Button variant="delete" />
      </footer>
    </div>
  );
}

export default HabitDetail;
