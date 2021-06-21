import React, { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import ColorSelector from '../../components/ColorSelector/ColorSelector';
import HabitInput from '../../components/HabitInput/HabitInput';
import styles from './CreateHabit.module.css';
import { colors } from '../../config';

function CreateHabit(): JSX.Element {
  const [color, selectColor] = useState(colors[0]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(color);
  }

  return (
    <div className={styles.createPage}>
      <header>
        <BackButton />
      </header>
      <form onSubmit={handleSubmit}>
        <HabitInput />
        <ColorSelector selectedColor={color} onSelectColor={selectColor} />
        <Button variant="submit" />
      </form>
    </div>
  );
}

export default CreateHabit;
