import React from 'react';
import CurrentDate from './CurrentDate';

export default {
  title: 'Component/CurrentDate',
  component: CurrentDate,
};

export const Date = (): JSX.Element => (
  <CurrentDate dateString="2021-06-24T13:10:09.347Z" />
);
