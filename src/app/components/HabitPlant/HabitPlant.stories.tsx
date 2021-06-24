import React from 'react';
import HabitPlant from './HabitPlant';

export default {
  title: 'Component/HabitPlant',
  component: HabitPlant,
};

export const NewlyPlanted = (): JSX.Element => <HabitPlant rating={0} />;

export const FreshPlant = (): JSX.Element => <HabitPlant rating={10} />;

export const IntermediatePlant = (): JSX.Element => <HabitPlant rating={20} />;

export const PerfectPlant = (): JSX.Element => <HabitPlant rating={30} />;
