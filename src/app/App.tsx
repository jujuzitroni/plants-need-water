import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateHabit from './pages/CreateHabit/CreateHabit';
import AddHabit from './components/AddHabit/AddHabit';

function App(): JSX.Element {
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
            <AddHabit link={'/create-habit'} />
          </main>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
