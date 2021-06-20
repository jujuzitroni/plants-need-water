import React from 'react';
import ColorSelector from './ColorSelector';

export default {
  title: 'Component/ColorSelector',
  component: ColorSelector,
};

let selectedColor = 'blue';

function changeColor(color: string) {
  selectedColor = color;
}

export const Selector = (): JSX.Element => (
  <ColorSelector selectedColor={selectedColor} onSelectColor={changeColor} />
);
