import React from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import { isLoggedIn } from '../../utils/isLoggedIn';
import './Login.css';
class Login extends React.Component {
  componentWillMount() {
    var query = queryString.parse(this.props.location.search);
    if (query.token) {
      window.localStorage.setItem("jwtToken", query.token);
    }
  }
  render() {
    if (isLoggedIn()) {
      return (<Redirect to="/" />);
    }

    return (
      <div id="wrapper">
        <div className="page-intro">
          <a href="https://shopping-cart-online.herokuapp.com/api/auth/google">
          {/* <a href="http://localhost:5000/api/auth/google"> */}
            <img className="sign-in-button" src={require('../../assets/img/button.png')} alt="imio" />
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
