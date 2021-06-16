import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import HabitInput from '../../components/HabitInput/HabitInput';
import styles from './CreateHabit.module.css';

function CreateHabit(): JSX.Element {
  return (
    <div>
      <header>
        <BackButton />
      </header>
      <form>
        <HabitInput />
        <select name="color" id="">
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
        <Button variant="submit" onClick={alert('submitted!')} />
      </form>
    </div>
  );
}

export default CreateHabit;
