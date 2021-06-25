import React from 'react';
import SwipeDate from './SwipeDate';

export default {
  title: 'Component/SwipeDate',
  component: SwipeDate,
};

export const Date = (): JSX.Element => (
  <SwipeDate dateString="2021-06-24T13:10:09.347Z" />
);
