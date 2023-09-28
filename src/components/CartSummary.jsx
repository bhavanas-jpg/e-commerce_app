import React from 'react'

const CartSummary = ({subTotal , total}) => {
  return (
    <>
         <div>
          <div className="d-flex">
            <p>Sub Total</p>
            <p>INR {subTotal}</p>
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
            <p>INR {total}</p>
          </div>
        </div>
    </>
  )
}

export default CartSummary