import React from 'react';
import HabitListPlaceholder from './HabitListPlaceholder';

export default {
  title: 'Component/HabitListPlaceholder',
  component: HabitListPlaceholder,
};

export const EmptyList = (): JSX.Element => <HabitListPlaceholder />;
