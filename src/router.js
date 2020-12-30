// handles react router routing
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import NewOrder from './components/NewOrder';

import HomeContextProvider from './context/HomeContext';

const router = () => {
  return (
    <HomeContextProvider>
      <Router>
        <Switch>
          <Route path='/newOrder'>
            <NewOrder/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </HomeContextProvider>);
};

export default router;
