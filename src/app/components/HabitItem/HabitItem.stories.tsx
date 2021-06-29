import React from 'react';
import HabitPlant from '../HabitPlant/HabitPlant';
import HabitItem from './HabitItem';

export default {
  title: 'Component/HabitItem',
  component: HabitItem,
};

export const Habit = (): JSX.Element => (
  <HabitItem
    checked={true}
    id="123"
    name="eat more cake"
    color="#FFD9B2"
    onHabitCheck={console.log}
  >
    <HabitPlant rating="coming_along" />
  </HabitItem>
);
