import React, { useState } from "react";
import CartSummary from "./CartSummary";

const CartProducts = ({ products }) => {
    const [cartProducts, setCartProducts] = useState(products)

const deleteProduct =(id) =>{
 const updatedCartProducts = cartProducts.filter(product=> product?.id !== id);
 setCartProducts(updatedCartProducts)
}

const subTotal = cartProducts.reduce((acc, curr)=>{
    const price = Number(curr.price.replace(/,/g ,''));

return acc = acc +  price ;
} ,0
)
const total = subTotal + 80;


  return (
    <div>
      {cartProducts?.map(({ id, img, name, size, price }) => (
        <div key={id}>
          <div className="d-flex">
          <img src={img} alt={name} />
            <div>
              <p>{name}</p>
              <p>Size {size}</p>
              <p>INR {price}</p>
            </div>
          </div>
          <button
          onClick={()=>deleteProduct(id)}
          >delete</button>
        </div>
      ))}
         <div>
        <button>Add a voucher</button>
        <CartSummary
        subTotal ={subTotal.toLocaleString()}
        total = {total.toLocaleString()}
        />
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartProducts;
