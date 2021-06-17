import React from 'react';
import ColorSelector from './ColorSelector';

export default {
  title: 'Component/ColorSelector',
  component: ColorSelector,
};

export const Selector = (): JSX.Element => (
  <ColorSelector onSelectColor={console.log} />
);
