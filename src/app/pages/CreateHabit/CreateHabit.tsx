import React, { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import ColorSelector from '../../components/ColorSelector/ColorSelector';
import HabitInput from '../../components/HabitInput/HabitInput';
import styles from './CreateHabit.module.css';
import { Habit } from '../../App';
import { v4 as uuidv4 } from 'uuid';
import { colors } from '../../config';

type CreateHabitProps = {
  onHabitListChange: (habit: Habit) => void;
};

function addHabit(name: string, color: string): Habit {
  return {
    id: uuidv4(),
    name,
    color,
    dateCreated: new Date().getTime(),
    datesCompleted: [],
    rating: '',
  };
}

function CreateHabit({ onHabitListChange }: CreateHabitProps): JSX.Element {
  const [color, selectColor] = useState(colors[0]);
  const [name, setName] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const habit = addHabit(name, color);
    onHabitListChange(habit);

    setName('');
    selectColor(colors[0]);
  }

  return (
    <div className={styles.createPage}>
      <header className={styles.createPage__header}>
        <BackButton />
      </header>
      <form className={styles.createPage__form} onSubmit={handleSubmit}>
        <div className={styles.createPage__inputs}>
          <HabitInput value={name} onNameChange={setName} />
          <ColorSelector selectedColor={color} onSelectColor={selectColor} />
        </div>
        <Button variant="submit">
          <p>add new habit</p>
        </Button>
      </form>
    </div>
  );
}

export default CreateHabit;
