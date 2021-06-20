import React from 'react';
import styles from './ColorSelector.module.css';

const colors = [
  '#DFEBEB',
  '#ECB8D4',
  '#EC5F65',
  '#AA87A8',
  '#FFEA6D',
  '#FFD9B2',
  '#1563AA',
  '#CB970A',
  '#F47B71',
  '#56A59B',
  '#6CC4C7',
  '#CADCDC',
  '#FA5735',
  '#2F96FA',
];

type ColorSelectorProps = {
  onSelectColor: (color: string) => void;
};

function ColorSelector({ onSelectColor }: ColorSelectorProps): JSX.Element {
  return (
    <label className={styles.colorSelector}>
      <span>choose color</span>
      <select
        className={styles.colorSelector__dropdown}
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
