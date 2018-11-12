import React from 'react';
import './NavBar.css';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getToken from '../../utils/getToken';
import axios from 'axios';

const totalPrice = cart => {

  return cart.reduce(
    (accum, product) => accum + product.price * product.quantity,
    0
  );
};

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: undefined
    }
  }
  componentDidMount() {
    var token = getToken()
    if (token) {
      axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token).then(response => {
        this.setState({ user: response.data.name })
      }).catch(error => console.log(error))
    }

  }
  render() {
    return (<nav className="NavBar-Wrapper">
      <div>
        <p>Welcome <b>{this.state.user}</b></p>
      </div>
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
      <Link to="/cart">
        <div className="Cart-Info">
          <span className="Cart-Item-Counter">{this.props.cart.length}</span>
          <i className="fa fa-shopping-bag"></i>
          <p>Cart: ${totalPrice(this.props.cart)}</p>
        </div>
      </Link>
      <div>
        <Link to="/logout">
          <p>Logout</p>
        </Link>
      </div>

    </nav>)
  }
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, null)(NavBar);