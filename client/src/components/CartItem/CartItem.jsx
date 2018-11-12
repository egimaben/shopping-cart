import React, { Fragment } from "react";
import "./CartItem.css";
import PropTypes from "prop-types";

const CartItem = props => {
  const {name,photo,price,quantity} = props.product;
  const {product,removeItem,addItem,removeWholeItem}=props;
  const onRemove=()=>{
    removeItem(product);
  }
  const onRemoveWhole=()=>{
    removeWholeItem(product);
  }
  const onAdd=()=>{
    addItem(product);
  }
  return (
    <Fragment>
      <tr>
        <td>
          {" "}
          <img
            src={photo}
            alt={name}
            className="Cart-Item-Photo"
          />{" "}
        </td>
        <td>{name}</td>
        <td>
          <button onClick={onRemove} className="Quantity-Button">
            -
          </button>
          <span className="Cart-Item-Quantity">{quantity}</span>
          <button onClick={onAdd} className="Quantity-Button">
            +
          </button>

        </td>
        <td>${price}</td>
        <td><i className="fa fa-times" onClick={onRemoveWhole} style={{ color: 'red', cursor: 'pointer' }}></i></td>
      </tr>

    </Fragment>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity:PropTypes.number.isRequired
  }),
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}

export default CartItem;
