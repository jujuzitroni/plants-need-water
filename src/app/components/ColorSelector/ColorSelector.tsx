import React from 'react';

const colors = ['red', 'pink', 'grey', 'lime'];

type ColorSelectorProps = {
  onSelectColor: (color: string) => void;
};

function ColorSelector({ onSelectColor }: ColorSelectorProps): JSX.Element {
  return (
    <label>
      <span>choose color</span>
      <select
        name="colorSelector"
        onChange={(event) => onSelectColor(event.target.value)}
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </label>
  );
}

export default ColorSelector;
