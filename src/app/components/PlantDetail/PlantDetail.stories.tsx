import React from 'react';
import PlantDetail from './PlantDetail';

export default {
  title: 'Component/PlantDetail',
  component: PlantDetail,
};

export const newStart = (): JSX.Element => (
  <PlantDetail rating="empty_pot" color="#CADCDC" />
);

export const someProgress = (): JSX.Element => (
  <PlantDetail rating="fresh_plant" color="#CADCDC" />
);

export const moreProgress = (): JSX.Element => (
  <PlantDetail rating="coming_along" color="#CADCDC" />
);

export const finalStage = (): JSX.Element => (
  <PlantDetail rating="bloom" color="#CADCDC" />
);
