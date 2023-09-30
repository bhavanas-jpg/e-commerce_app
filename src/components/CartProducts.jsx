import React, { useState } from "react";
import CartSummary from "./CartSummary";
import trash from "../assets/trash.svg";
import arrow from "../assets/arrow.svg"

const CartProducts = ({ products }) => {
  const [cartProducts, setCartProducts] = useState(products);

  const deleteProduct = (id) => {
    const updatedCartProducts = cartProducts.filter(
      (product) => product?.id !== id
    );
    setCartProducts(updatedCartProducts);
  };

  const subTotal = cartProducts.reduce((acc, curr) => {
    const price = Number(curr.price.replace(/,/g, ""));
    return (acc = acc + price);
  }, 0);
  const total = subTotal + 80;

  return (
    <div>
      {cartProducts?.map(({ id, img, name, size, price, quantity }) => (
        <div key={id}>
          <div className="cart__content">
            <img className="cart__image" src={img} alt={name} />

            <div className="cart__text--container">
              <div className="cart__text">
                <div>
                  <p className="cart__product--name">{name}</p>
                  <p className="cart__product--size">Size {size}</p>
                </div>
                <div>
                  <button
                    className="delete__btn"
                    onClick={() => deleteProduct(id)}
                  >
                    <img src={trash} alt="delete icon" />
                  </button>
                </div>
              </div>

              <div className="cart__text">
                <p className="cart__product--price">INR {price}</p>

                <div className="cart__btn--container">
                  <button>-</button>
                  <span>{quantity}</span>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div>
        <button className="voucher__btn">Add a voucher</button>
        <CartSummary
          subTotal={subTotal.toLocaleString()}
          total={total.toLocaleString()}
        />
        <div className="bottom__sec">
          <button className="checkout__btn">Checkout
          <img src={arrow} alt="arrow right icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
