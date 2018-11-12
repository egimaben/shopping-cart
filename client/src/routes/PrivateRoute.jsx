import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isLoggedIn } from '../utils/isLoggedIn';

class PrivateRoute extends React.Component {

  isAdmin=()=> {
    return true;
  }
  render() {
    const {component:Component,...rest} = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isLoggedIn() ? (<div>{this.isAdmin() &&
            <Component {...props} />}
            {!this.isAdmin() && <Component {...props} />}</div>
          ) : (
              <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        }
      />
    )
  }
}

export default PrivateRoute