import React from 'react';
import styles from './PlantDetail.module.css';
import HabitPlant from '../HabitPlant/HabitPlant';

function PlantDetail(): JSX.Element {
  return (
    <article className={styles.plantCard}>
      <HabitPlant rating={12} />
      <p>this is not the final text</p>
    </article>
  );
}

export default PlantDetail;
