import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Habit } from '../../App';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import DeleteIcon from '../../components/Icons/DeleteIcon';
import PlantDetail from '../../components/PlantDetail/PlantDetail';
import { format } from 'date-fns';
import styles from './HabitDetail.module.css';
import { useLocalStorage } from '../../utils';

type HabitDetailParams = {
  id: string;
};

function HabitDetail(): JSX.Element {
  const [habits, setHabits] = useLocalStorage<Habit[]>('habits', []);
  const { id } = useParams<HabitDetailParams>();
  const history = useHistory();
  const habit = habits.find((item) => item.id === id);
  const { rating, color, name, dateCreated, datesCompleted } = habit as Habit;
  const formattedDate = format(dateCreated, 'd.L.');

  function handleClick() {
    const updatedList = habits.filter((habit) => habit.id !== id);
    setHabits(updatedList);
    history.push('/');
    window.location.reload();
  }

  return (
    <div className={styles.DetailPage}>
      <header>
        <BackButton />
      </header>
      <main>
        <h1>{name}</h1>
        <PlantDetail rating={rating} color={color} />
        <article className={styles.stat}>
          <span>started tracking: </span>
          <span>{formattedDate}</span>
        </article>
        <article className={styles.stat__completed}>
          <span>
            completed on <span>{datesCompleted.length}</span> days
          </span>
        </article>
      </main>
      <footer>
        <div className={styles.footer__bar} />
        <Button variant="delete" onClick={handleClick}>
          <DeleteIcon />
          Delete Habit
        </Button>
      </footer>
    </div>
  );
}

export default HabitDetail;
