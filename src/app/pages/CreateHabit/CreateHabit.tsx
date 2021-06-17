import React, { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import ColorSelector from '../../components/ColorSelector/ColorSelector';
import HabitInput from '../../components/HabitInput/HabitInput';
import styles from './CreateHabit.module.css';

function CreateHabit(): JSX.Element {
  const [color, selectColor] = useState('red');
  console.log(color);
  return (
    <div className={styles.createPage}>
      <header>
        <BackButton />
      </header>
      <form>
        <HabitInput />
        <ColorSelector onSelectColor={selectColor} />
        <Button variant="submit" onClick={() => console.log('submitted')} />
      </form>
    </div>
  );
}

export default CreateHabit;
