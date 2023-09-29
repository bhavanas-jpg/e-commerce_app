import React from 'react'
import { products } from '../data/products'
import Card from './Card'

const Products = () => {
  return (
    <div className="product__container">
    {products.map(product =>(
      <Card 
      
      className="card"
      key={product.id}
      product={product}/>  
    ))}
    </div>
  )
}

export default Products