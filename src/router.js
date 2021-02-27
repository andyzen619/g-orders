// handles react router routing
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import NewOrderV2 from './components/NewOrderV2';

const router = () => {
  return (

    <Router>
      <Switch>
        <Route path='/editOrder/:id'>
          <NewOrderV2/>
        </Route>
        <Route path='/newOrder'>
          <NewOrderV2/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
};

export default router;
