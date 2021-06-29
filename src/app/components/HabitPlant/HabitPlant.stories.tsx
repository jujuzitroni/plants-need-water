import React from 'react';
import HabitPlant from './HabitPlant';

export default {
  title: 'Component/HabitPlant',
  component: HabitPlant,
};

export const NewlyPlanted = (): JSX.Element => (
  <HabitPlant rating="empty_pot" />
);

export const FreshPlant = (): JSX.Element => (
  <HabitPlant rating="fresh_plant" />
);

export const IntermediatePlant = (): JSX.Element => (
  <HabitPlant rating="coming_along" />
);

export const PerfectPlant = (): JSX.Element => <HabitPlant rating="bloom" />;
