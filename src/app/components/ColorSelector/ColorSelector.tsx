import React, { useState } from 'react';
import styles from './ColorSelector.module.css';
import { colors } from '../../config';

type ColorSelectorProps = {
  selectedColor: string;
  onSelectColor: (color: string) => void;
};

function ColorSelector({
  selectedColor,
  onSelectColor,
}: ColorSelectorProps): JSX.Element {
  const [isListOpen, setListOpen] = useState(false);

  return (
    <div className={styles.colorSelector}>
      <h2>choose color</h2>
      <button
        type="button"
        className={styles.colorSelector__select}
        onClick={() => {
          setListOpen(!isListOpen);
        }}
      >
        <div
          className={styles.colorSelector__dots}
          style={{ backgroundColor: selectedColor }}
        />
      </button>
      {isListOpen && (
        <ul className={styles.colorSelector__dropdown}>
          {colors.map((color) => (
            <li
              key={color}
              className={styles.colorSelector__dots}
              style={{ backgroundColor: color }}
              onClick={() => {
                onSelectColor(color);
                setListOpen(false);
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ColorSelector;
