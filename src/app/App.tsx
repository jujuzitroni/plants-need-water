import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateHabit from './pages/CreateHabit/CreateHabit';
import AddHabit from './components/AddHabit/AddHabit';

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
      <Switch>
        <Route path="/create-habit">
          <main>
            <CreateHabit />
          </main>
        </Route>
        <Route path="/">
          <main>
            <ul>{habits.map(toListElement)}</ul>
            <AddHabit link={'/create-habit'} />
          </main>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
