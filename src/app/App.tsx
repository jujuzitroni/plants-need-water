import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateHabit from './pages/CreateHabit/CreateHabit';
import AddHabit from './components/AddHabit/AddHabit';

export type Habit = {
  id: string;
  name: string;
  color: string;
  dateCreated: number;
  datesCompleted: string[];
  rating: string;
};

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <main>
          <Route path="/create-habit">
            <CreateHabit />
          </Route>
          <Route path="/">
            <AddHabit link={'/create-habit'} />
          </Route>
        </main>
      </Switch>
    </Router>
  );
}

export default App;
