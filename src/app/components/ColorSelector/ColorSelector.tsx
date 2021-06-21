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
    <>
      <h2>choose color</h2>
      <div
        className={styles.colorSelector__selected}
        onClick={() => {
          setListOpen(!isListOpen);
        }}
      >
        <div
          className={styles.colorSelector__dots}
          style={{ backgroundColor: selectedColor }}
        />
      </div>
      {isListOpen && (
        <ul className={styles.colorSelector__dropdown}>
          {colors.map((color) => (
            <li key={color}>
              <div
                className={styles.colorSelector__dots}
                style={{ backgroundColor: color }}
                onClick={() => {
                  onSelectColor(color);
                  setListOpen(false);
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ColorSelector;
