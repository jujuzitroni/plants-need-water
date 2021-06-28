import React from 'react';
import styles from './PlantDetail.module.css';
import HabitPlant from '../HabitPlant/HabitPlant';

type PlantDetailProps = {
  rating: string;
  color: string;
};

function getTagline(rating: string) {
  if (rating === 'empty_pot') {
    return "let's do this";
  }
  if (rating === 'fresh_plant') {
    return 'keep at it';
  }
  if (rating === 'coming_along') {
    return 'you are doing great';
  }
  return 'great job';
}

function PlantDetail({ rating, color }: PlantDetailProps): JSX.Element {
  const tagline = getTagline(rating);

  return (
    <article
      className={styles.plantCard}
      style={{ borderBottom: `8px solid ${color}` }}
    >
      <HabitPlant rating={rating} />
      <p>{tagline}</p>
    </article>
  );
}

export default PlantDetail;
