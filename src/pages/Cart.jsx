import React from 'react'
import CartSummary from '../components/CartSummary'
import { products } from '../data/products'
import CartProducts from '../components/CartProducts';

const Cart = () => {

  const cartProducts = products.slice(0, 3);

  return (
    <div>
      <h3>My Cart</h3>
      <CartProducts products ={cartProducts}/>
   
    </div>
  )
}

export default Cart