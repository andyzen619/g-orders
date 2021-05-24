// handles react router routing
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const router = () => {
  return (

    <Router>
      <Switch>
        <Route path='/'>
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default router;
