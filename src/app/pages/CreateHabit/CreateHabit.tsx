import React, { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import ColorSelector from '../../components/ColorSelector/ColorSelector';
import HabitInput from '../../components/HabitInput/HabitInput';
import styles from './CreateHabit.module.css';
import { Habit } from '../../App';
import { v4 as uuidv4 } from 'uuid';

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

function CreateHabit(): JSX.Element {
  const [color, selectColor] = useState('red');
  const [name, setName] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const habit = addHabit(name, color);
    console.log(habit);
  }

  return (
    <div className={styles.createPage}>
      <header>
        <BackButton />
      </header>
      <form onSubmit={handleSubmit}>
        <HabitInput onNameChange={setName} />
        <ColorSelector onSelectColor={selectColor} />
        <Button variant="submit" />
      </form>
    </div>
  );
}

export default CreateHabit;
