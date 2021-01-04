import React from 'react';
import { Route, Switch } from 'react-router-dom';

//compnents
import Home from './components/home/Home';

const App = () => (
  <main>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
  </main>
);

export default App;
