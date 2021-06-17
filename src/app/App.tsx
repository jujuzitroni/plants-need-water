import React from 'react';
import styles from './App.module.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNav from './components/PageNav/PageNav';

function App(): JSX.Element {
  return (
    <Router>
      <div className={styles.App}>
        <header>
          <PageNav />
        </header>
        <Switch>
          <Route path="/about">
            <main>
              About
              <p>Hello Vite + React!</p>
            </main>
          </Route>
          <Route path="/home">
            <main>Home</main>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
