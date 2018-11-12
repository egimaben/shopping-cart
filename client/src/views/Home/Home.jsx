import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { fetchProducts } from '../../store/actions/products';
// Components
import Products from '../../components/Products/Products';
import NavBar from '../../widgets/NavBar/NavBar';

class Home extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <main>
        <NavBar />
        <Products products={this.props.products} />
      </main>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
});

export default connect(mapStateToProps, { fetchProducts })(Home);
