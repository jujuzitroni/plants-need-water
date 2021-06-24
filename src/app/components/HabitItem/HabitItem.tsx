import React from 'react';
import styles from './HabitItem.module.css';

type HabitItemProps = {
  children: React.ReactNode;
  name: string;
  color: string;
  checked: boolean;
  id: string;
  onHabitCheck: () => void;
};

function HabitItem({
  children,
  onHabitCheck,
  color,
  name,
  checked,
  id,
}: HabitItemProps): JSX.Element {
  return (
    <article className={styles.container}>
      <div className={styles.checkbox}>
        <input
          className={styles.checkbox__input}
          id={id}
          type="checkbox"
          checked={checked}
          onChange={() => onHabitCheck()}
        />
        <label htmlFor={id} />
      </div>
      <span>{name}</span>
      <div className={styles.plantCard} style={{ backgroundColor: color }}>
        {children}
      </div>
    </article>
  );
}

export default HabitItem;
