import React from 'react';
import plant_fresh from '../../assets/plant_fresh.png';
import plant_coming_along from '../../assets/plant_coming_along.png';
import plant_bloom from '../../assets/plant_bloom.png';
import plant_sad from '../../assets/plant_sad.png';

type HabitPlantProps = {
  rating: number;
};

// note: the newlyPlanted plant is a placeholder for now

function getHabitRating(rating: number) {
  if (rating === 0) {
    return {
      imgSrc: plant_sad,
      alt: 'empty flower pot',
    };
  }
  if (rating <= 10) {
    return {
      imgSrc: plant_fresh,
      alt: 'small plant in a pot',
    };
  }
  if (rating <= 20) {
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
  const habitRating = getHabitRating(rating);

  return <img src={habitRating.imgSrc} alt={habitRating.alt} />;
}

export default HabitPlant;
