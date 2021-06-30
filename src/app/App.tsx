import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Rating } from './config';
import About from './pages/About/About';
import Calendar from './pages/Calendar/Calendar';
import CreateHabit from './pages/CreateHabit/CreateHabit';
import HabitDetail from './pages/HabitDetail/HabitDetail';
import HabitList from './pages/HabitList/HabitList';
import { useLocalStorage } from './utils';

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
    <Router>
      <Switch>
        <main>
          <Route exact path="/">
            <HabitList habits={habits} setHabits={setHabits} />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/create-habit">
            <CreateHabit onHabitListChange={addHabitToHabitList} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/detail/:id">
            <HabitDetail habits={habits} />
          </Route>
        </main>
      </Switch>
    </Router>
  );
}

export default App;
