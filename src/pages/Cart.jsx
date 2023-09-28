import React from 'react'

const Cart = () => {
  return (
    <div>
      <h3>My Cart</h3>

      <div>
        <button>Add a voucher</button>

        <div>
          <div className="d-flex">
            <p>Sub Total</p>
            <p>INR 5,870</p>
          </div>
          <div className="d-flex">
            <p>VAT (%)</p>
            <p>INR 0.00</p>
          </div>
          <div className="d-flex">
            <p>Shipping fee</p>
            <p>INR 80</p>
          </div>
          <div className="d-flex">
            <p>Total</p>
            <p>INR 5,950</p>
          </div>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Cart