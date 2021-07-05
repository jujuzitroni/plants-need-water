import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Rating } from './config';
import About from './pages/About/About';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import CreateHabit from './pages/CreateHabit/CreateHabit';
import HabitDetail from './pages/HabitDetail/HabitDetail';
import HabitList from './pages/HabitList/HabitList';
import { useLocalStorage } from './utils';
import styles from './App.module.css';

export type Habit = {
  id: string;
  name: string;
  color: string;
  dateCreated: number;
  datesCompleted: string[];
  rating: Rating;
};

function App(): JSX.Element {
  const [habits, setHabits] = useLocalStorage<Habit[]>('habits', []);

  function addHabitToHabitList(habit: Habit): void {
    const updatedList = habits.concat(habit);
    setHabits(updatedList);
  }

  return (
    <div className={styles.container}>
      <Router>
        <main>
          <Switch>
            <Route exact path="/">
              <HabitList habits={habits} setHabits={setHabits} />
            </Route>
            <Route path="/habits/:timestamp">
              <HabitList habits={habits} setHabits={setHabits} />
            </Route>
            <Route path="/calendar">
              <CalendarPage habits={habits} />
            </Route>
            <Route path="/create-habit">
              <CreateHabit onHabitListChange={addHabitToHabitList} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/detail/:id">
              <HabitDetail />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
