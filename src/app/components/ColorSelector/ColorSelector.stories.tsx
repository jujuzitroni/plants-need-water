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
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
  </ColorSelector>
);
