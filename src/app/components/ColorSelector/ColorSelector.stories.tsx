import React, { useState } from 'react';
import ColorSelector from './ColorSelector';

export default {
  title: 'Component/ColorSelector',
  component: ColorSelector,
};

export const Selector = (): JSX.Element => {
  const [selectedColor, setSelectedColor] = useState('blue');
  return (
    <ColorSelector
      selectedColor={selectedColor}
      onSelectColor={setSelectedColor}
    />
  );
};
