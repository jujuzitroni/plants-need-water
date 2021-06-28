import React from 'react';
import { useParams } from 'react-router-dom';
import { Habit } from '../../App';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import PlantDetail from '../../components/PlantDetail/PlantDetail';

import styles from './HabitDetail.module.css';

type HabitDetailProps = {
  habits: Habit[];
};

type HabitDetailParams = {
  id: string;
};

function HabitDetail({ habits }: HabitDetailProps): JSX.Element {
  const { id } = useParams<HabitDetailParams>();
  const habit = habits.find((item) => item.id === id);
  const { rating, color } = habit as Habit;

  return (
    <div className={styles.DetailPage}>
      <header>
        <BackButton />
      </header>
      <main>
        <PlantDetail rating={rating} color={color} />
        <p>coming soon</p>
      </main>
      <footer>
        <Button variant="delete" />
      </footer>
    </div>
  );
}

export default HabitDetail;
