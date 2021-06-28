import React from 'react';
import plant_fresh from '../../assets/plant_fresh.png';
import plant_coming_along from '../../assets/plant_coming_along.png';
import plant_bloom from '../../assets/plant_bloom.png';
import empty_pot from '../../assets/empty_pot.png';
import { RATING, Rating } from '../../config';

type HabitPlantProps = {
  rating: Rating;
};

function getImgSrc(rating: Rating) {
  if (rating === RATING.new) {
    return {
      imgSrc: empty_pot,
      alt: 'empty flower pot',
    };
  }
  if (rating === RATING.beginner) {
    return {
      imgSrc: plant_fresh,
      alt: 'small plant in a pot',
    };
  }
  if (rating === RATING.intermediate) {
    return {
      imgSrc: plant_coming_along,
      alt: 'a grown plant in a pot',
    };
  }
  return {
    imgSrc: plant_bloom,
    alt: 'a grown plant with a blossom',
  };
}

function HabitPlant({ rating }: HabitPlantProps): JSX.Element {
  const habitRating = getImgSrc(rating);

  return <img src={habitRating.imgSrc} alt={habitRating.alt} />;
}

export default HabitPlant;
