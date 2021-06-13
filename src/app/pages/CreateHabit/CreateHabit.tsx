import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import styles from './CreateHabit.module.css';

function CreateHabit(): JSX.Element {
  return (
    <div>
      <header>
        <BackButton />
      </header>
      <form>
        <input />
        <select name="color" id="">
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
        <button>submit</button>
      </form>
    </div>
  );
}

export default CreateHabit;
