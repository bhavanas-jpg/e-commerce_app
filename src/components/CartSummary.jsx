import React from 'react'
import "../pages/Cart.css"

const CartSummary = ({subTotal , total}) => {
  return (
    <>
         <div>
          <div className="d-flex">
            <p className="summary__text">Sub Total</p>
            <p className="summary__value">INR {subTotal}</p>
          </div>
          <div className="d-flex">
            <p className="summary__text">VAT (%)</p>
            <p className="summary__value">INR 0.00</p>
          </div>
          <div className="d-flex ">
            <p className="summary__text">Shipping fee</p>
            <p className="summary__value">INR 80</p>
          </div>
          <div className="border_cnt">

          </div>
          <div className="d-flex total__text">
            <p>Total</p>
            <p>INR {total}</p>
          </div>
        </div>
    </>
  )
}

export default CartSummary