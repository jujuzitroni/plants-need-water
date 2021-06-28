import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About/About';
import Calendar from './pages/Calendar/Calendar';
import CreateHabit from './pages/CreateHabit/CreateHabit';
import HabitDetail from './pages/HabitDetail/HabitDetail';
import HabitList from './pages/HabitList/HabitList';

export type Habit = {
  id: string;
  name: string;
  color: string;
  dateCreated: number;
  datesCompleted: string[];
  rating: string;
};

function App(): JSX.Element {
  const [habits, setHabits] = useState<Habit[]>([]);

  function setHabitList(habit: Habit): void {
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
            <CreateHabit onHabitListChange={setHabitList} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/detail">
            <HabitDetail />
          </Route>
        </main>
      </Switch>
    </Router>
  );
}

export default App;
