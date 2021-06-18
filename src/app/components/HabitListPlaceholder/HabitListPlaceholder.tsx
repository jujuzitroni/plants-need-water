import React from 'react';
import PageLink from '../PageLink/PageLink';
import styles from './HabitListPlaceholder.module.css';

function HabitListPlaceholder(): JSX.Element {
  return (
    <div className={styles.placeholder}>
      <p>No habits added yet!</p>
      <p>Let’s get started, plants need water after all.</p>
      <PageLink variant="addNew" link="#">
        <p>add new habit</p>
      </PageLink>
    </div>
  );
}

export default HabitListPlaceholder;
