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
  '#45C349',
];

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
          className={styles.colorDot}
          style={{ backgroundColor: selectedColor }}
        />
      </div>
      {isListOpen && (
        <ul className={styles.colorSelector__dropdown}>
          {colors.map((color) => (
            <li key={color}>
              <div
                className={styles.colorDot}
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
