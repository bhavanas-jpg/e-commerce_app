import React from 'react'
import CartSummary from '../components/CartSummary'
import { products } from '../data/products'
import CartProducts from '../components/CartProducts';
import Header from '../components/Header';
import "./Cart.css"

const Cart = () => {

  const cartProducts = products.slice(0, 3);

  return (
    <div className="cart__container">
      <Header heading="My Cart" />
      <CartProducts products ={cartProducts}/>
   
    </div>
  )
}

export default Cart