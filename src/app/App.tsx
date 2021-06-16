import React, { useState } from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tabs from './components/Tabs/Tabs';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <Router>
      <div className={styles.App}>
        <header>
          <Tabs />
        </header>
        <Switch>
          <Route path="/about">
            <main>
              About
              <p>Hello Vite + React!</p>
            </main>
          </Route>
          <Route path="/">
            <main>Home</main>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
