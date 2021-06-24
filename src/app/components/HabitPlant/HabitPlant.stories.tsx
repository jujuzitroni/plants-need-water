import React from 'react';
import HabitPlant from './HabitPlant';

export default {
  title: 'Component/HabitPlant',
  component: HabitPlant,
};

// note: the newlyPlanted plant is a placeholder for now

export const NewlyPlanted = (): JSX.Element => <HabitPlant rating={0} />;

export const FreshPlant = (): JSX.Element => <HabitPlant rating={10} />;

export const IntermediatePlant = (): JSX.Element => <HabitPlant rating={20} />;

export const PerfectPlant = (): JSX.Element => <HabitPlant rating={30} />;
