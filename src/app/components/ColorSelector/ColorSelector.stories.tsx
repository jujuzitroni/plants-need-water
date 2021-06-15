import React from 'react';
import ColorSelector from './ColorSelector';

export default {
  title: 'Component/ColorSelector',
  component: ColorSelector,
};

export const Selector = (): JSX.Element => (
  <ColorSelector>
    <option value="">--Please choose an option--</option>
    <option value="red">red</option>
    <option value="yellow">yellow</option>
    <option value="purple">purple</option>
  </ColorSelector>
);
