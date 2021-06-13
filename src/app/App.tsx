import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';

type Habit = {
  id: string;
  name: string;
  color: string;
  dateCreated: string;
  datesCompleted: string[];
  rating: string;
};

function toListElement(habit: Habit): JSX.Element {
  return (
    <li key={habit.id}>
      <input type="checkbox" /> {habit.name}
      <div
        className={styles.habitColor}
        style={{ backgroundColor: habit.color }}
      ></div>
    </li>
  );
}

function App(): JSX.Element {
  const habits: Habit[] = [
    {
      id: '1',
      name: 'take a break',
      color: 'hotpink',
      dateCreated: '12.3.21',
      datesCompleted: [],
      rating: 'nice',
    },
    {
      id: '2',
      name: 'take a break',
      color: 'hotpink',
      dateCreated: '12.3.21',
      datesCompleted: [],
      rating: 'nice',
    },
    {
      id: '3',
      name: 'take a break',
      color: 'hotpink',
      dateCreated: '12.3.21',
      datesCompleted: [],
      rating: 'nice',
    },
  ];

  return (
    <Router>
      <ul>{habits.map(toListElement)}</ul>
    </Router>
  );
}

export default App;
