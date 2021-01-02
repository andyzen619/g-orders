// handles react router routing
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';

import HomeContextProvider from './context/HomeContext';
import NewOrderContextProvider from './context/NewOrderContext';
import NewOrderV2 from './components/NewOrderV2';

const router = () => {
  return (
    <HomeContextProvider>
      <NewOrderContextProvider>
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
      </NewOrderContextProvider>
    </HomeContextProvider>);
};

export default router;
