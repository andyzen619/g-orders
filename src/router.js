// handles react router routing
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import NewOrder from './components/NewOrder';

const router = () => {
  return (<Router>
    <Switch>
      <Route path='/newOrder'>
        <NewOrder/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>
    </Switch>
  </Router>);
};

export default router;
