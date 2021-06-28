import React from 'react';
import styles from './PlantDetail.module.css';
import HabitPlant from '../HabitPlant/HabitPlant';

type PlantDetailProps = {
  rating: string;
  color: string;
};

function PlantDetail({ rating, color }: PlantDetailProps): JSX.Element {
  return (
    <article
      className={styles.plantCard}
      style={{ borderBottom: `8px solid ${color}` }}
    >
      <HabitPlant rating={rating} />
      <p>this is not the final text</p>
    </article>
  );
}

export default PlantDetail;
