// handles react router routing
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import NewOrder from './components/NewOrder';

import HomeContextProvider from './context/HomeContext';
import NewOrderContextProvider from './context/NewOrderContext';

const router = () => {
  return (
    <HomeContextProvider>
      <NewOrderContextProvider>
        <Router>
          <Switch>
            <Route path='/editOrder/:id'>
              <NewOrder/>
            </Route>
            <Route path='/newOrder'>
              <NewOrder/>
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
