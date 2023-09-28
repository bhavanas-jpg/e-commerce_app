import React from 'react'
import { products } from '../data/products'
import Card from './Card'

const Products = () => {
  return (
    <>
    {products.map(product =>(
      <Card 
      key={product.id}
      product={product}/>  
    ))}
    </>
  )
}

export default Products