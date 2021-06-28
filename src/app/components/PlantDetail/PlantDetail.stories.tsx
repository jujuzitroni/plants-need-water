import React from 'react';
import PlantDetail from './PlantDetail';

export default {
  title: 'Component/PlantDetail',
  component: PlantDetail,
};

export const plantCard = (): JSX.Element => (
  <PlantDetail rating="coming_along" color="#CADCDC" />
);
