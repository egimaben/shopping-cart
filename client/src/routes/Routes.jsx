import React from 'react';

import { Switch, Route } from 'react-router-dom';

// Components
import Home from '../views/Home/Home';
import Cart from '../views/Cart/Cart';
import Checkout from '../views/Checkout/Checkout';
import Login from '../views/Login/Login';
import Logout from '../views/Logout/Logout';
import PrivateRoute from './PrivateRoute';

const Routes = (props) => {
  return (
  <Switch>
    <Route path="/login" component={Login} exact/>
    <Route path="/logout" component={Logout} exact/>
    <PrivateRoute path="/" component={ Home } exact />    
    <PrivateRoute path="/cart" component={ Cart } exact />    
    <PrivateRoute path="/checkout" component={ Checkout } exact />    
  </Switch>
  );
};

export default Routes;