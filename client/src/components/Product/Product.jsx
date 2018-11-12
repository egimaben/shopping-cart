import React from 'react';
import "./Product.css";
import PropTypes from 'prop-types';

const Product = props => {
  const onAdd = () => {
    props.addToCart(props.product, props.index)
  }
  return (
    <div className="Product-Wrapper">
      <div className="Product">
        <div className="Product-Image-Wrapper">
          <img src={props.product.photo} alt={props.product.name} className="Product-Image" />
        </div>
        <div className="Product-Title">
          <p className="Product-Name">{props.product.name}</p>
        </div>
        <div className="Product-Data">
          <small className="Product-Price">${props.product.price}</small>
          <button onClick={onAdd} className="product-button Product-Add">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  addToCart: PropTypes.func.isRequired
};

export default Product;