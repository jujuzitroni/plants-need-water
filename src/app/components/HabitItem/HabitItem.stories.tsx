import React from 'react';
import HabitPlant from '../HabitPlant/HabitPlant';
import HabitItem from './HabitItem';

export default {
  title: 'Component/HabitItem',
  component: HabitItem,
};

export const Habit = (): JSX.Element => (
  <HabitItem name="eat more cake" color="#FFD9B2" onHabitCheck={console.log}>
    <HabitPlant rating={20} />
  </HabitItem>
);
