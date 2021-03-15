// handles react router routing
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './views/Home';
import NewOrder from './views/NewOrder';

const router = () => {
  return (

    <Router>
      <Switch>
        <Route path='/editOrder/:id'>
          <NewOrder/>
        </Route>
        <Route path='/newOrder/:startDate'>
          <NewOrder/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
};

export default router;
