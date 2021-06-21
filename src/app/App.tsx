import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateHabit from './pages/CreateHabit/CreateHabit';
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
          <Route path="/create-habit">
            <CreateHabit setHabitList={setHabitList} />
          </Route>
          <Route exact path="/">
            <HabitList habits={habits} />
          </Route>
        </main>
      </Switch>
    </Router>
  );
}

export default App;
