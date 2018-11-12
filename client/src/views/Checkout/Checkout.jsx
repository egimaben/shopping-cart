import React, { Component } from "react";
import "./Checkout.css";
import BuySomething from "../../widgets/BuySomething/BuySomething";
import NavBar from '../../widgets/NavBar/NavBar';
import getToken from '../../utils/getToken';
import axios from 'axios';

import { connect } from 'react-redux';
class Checkout extends Component {
  state = {
    name: "you",
  };
  componentDidMount() {
    var token = getToken()
    if (token) {
      axios.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + token).then(response => {
        this.setState({ name: response.data.name })
      }).catch(error => console.log(error))
    }
  }
  render() {

    if (!this.props.cart.length)
      return <BuySomething message="Cart is empty to checkout!" />

    return (
      <div>
        <NavBar />
        <div className="Checkout-Wrapper">
          <h1 className="Checkout-Title">Thanks</h1>
          <p style={{ color: "#000", padding: '20px', display:'flex', justifyContent:'center' }}>
            <strong>{this.state.name}</strong>
          </p>
          <p style={{ color: "#000", padding: '20px', display:'flex', justifyContent:'center' }}>
            for shopping with us, Your checkout is being processed...!
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps, null)(Checkout);
