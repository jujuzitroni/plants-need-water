import React, { Dispatch, SetStateAction } from 'react';

const colors = ['red', 'pink', 'grey', 'lime'];

type ColorSelectorProps = {
  selectColor: Dispatch<SetStateAction<string>>;
};

function ColorSelector({ selectColor }: ColorSelectorProps): JSX.Element {
  return (
    <label>
      <span>choose color</span>
      <select
        name="colorSelector"
        onChange={(event) => selectColor(event.target.value)}
      >
        {colors.map((color) => (
          <option value={color}>{color}</option>
        ))}
      </select>
    </label>
  );
}

export default ColorSelector;
