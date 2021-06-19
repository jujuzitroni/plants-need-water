import React from 'react';
import CreateHabit from './CreateHabit';

export default {
  title: 'Page/CreateHabit',
  page: CreateHabit,
};

export const CreateNewHabit = (): JSX.Element => (
  <CreateHabit setHabitList={console.log} />
);
