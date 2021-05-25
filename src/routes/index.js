// handles react router routing
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import NewOrderView from '../views/NewOrderView';

const router = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div>404 Not Found</div>
        </Route>
        <Route path='/newOrder'>
          <NewOrderView/>
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default router;
