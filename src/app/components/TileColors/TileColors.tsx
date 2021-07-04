import React from 'react';
import styles from './TileColors.module.css';

type TileColorsProps = {
  colors: string[];
};

function TileColors({ colors }: TileColorsProps): JSX.Element {
  return (
    <div className={styles.colorTile}>
      {colors.map((color) => (
        <div
          key={color}
          className={styles.colorDot}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export default TileColors;
