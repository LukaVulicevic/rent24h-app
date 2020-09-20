import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home, About, Signin, Signup, Premium, Economy, Regular, Order, Checkout} from './pages/index'
import * as ROUTES from './constants/routes'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path={ROUTES.HOME}>
              <Home/>
          </Route>
          <Route path={ROUTES.ABOUT}>
              <About/>
          </Route>
          <Route path={ROUTES.SIGN_IN}>
              <Signin/>
          </Route>
          <Route path={ROUTES.SIGN_UP}>
              <Signup/>
          </Route>
          <Route path={ROUTES.PREMIUM}>
              <Premium/>
          </Route>
          <Route path={ROUTES.REGULAR}>
              <Regular/>
          </Route>
          <Route path={ROUTES.ECONOMY}>
              <Economy/>
          </Route>
          <Route path={ROUTES.ORDER}>
              <Order/>
          </Route>
          <Route path={ROUTES.CHECKOUT}>
              <Checkout/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
