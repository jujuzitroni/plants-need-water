import React from 'react';
import styles from './HabitItem.module.css';
import plant_bloom from '../../assets/plant_bloom.png';

function HabitItem(): JSX.Element {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <div className={styles.checkbox}>
          <input type="checkbox" />
        </div>
        <span>this is a habit</span>
      </div>
      <div className={styles.plantCard}>
        <img src={plant_bloom} alt="" />
      </div>
    </article>
  );
}

export default HabitItem;
