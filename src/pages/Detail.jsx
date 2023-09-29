import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductDetail from '../components/ProductDetail';

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {id} = useParams();
  const [selectedSize, setSelectedSize] = useState("");
 const sizes = ["S", "M", "L"];
 

 const product = products.find(product => product.id === parseInt(id));

 const selectSize = (size)=>{
 const sizeValue= sizes.find(sizeItem => sizeItem === size);
 setSelectedSize(sizeValue);
 } 

console.log(location)

  return (
    <div>
     <h3>Details</h3>
     <span 
     onClick={()=>navigate(location?.state?.from)}
     >back btn</span>
     <ProductDetail product={product}/>
    <p>Choose size</p>
     {sizes.map((size ,index )=> (
      <button
      style={{color: selectedSize === size ? "red": ""}}
      onClick={()=>selectSize(size)}
       key={index}>
        {size}
      </button>
     ))}

    <div className="d-flex">
      <div>
      <p>Price</p>
      <p>INR {product.price}</p>
      </div>
   

    <button
    onClick={()=>navigate("/cart")}
    >Add to Cart</button>
    </div>
  
    </div>
  )
}

export default Detail