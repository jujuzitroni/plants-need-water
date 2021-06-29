import React from 'react';
import styles from './PlantDetail.module.css';
import HabitPlant from '../HabitPlant/HabitPlant';
import { Rating, RATING } from '../../config';

type PlantDetailProps = {
  rating: Rating;
  color: string;
};

function getTagline(rating: string) {
  if (rating === RATING.new) {
    return "let's do this";
  }
  if (rating === RATING.beginner) {
    return 'keep at it';
  }
  if (rating === RATING.intermediate) {
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
