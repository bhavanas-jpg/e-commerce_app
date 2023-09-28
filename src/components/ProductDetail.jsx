import React from 'react'

const ProductDetail = ({product}) => {
    const {id,name, description, img, price, rating, reviews} = product;
  return (
    <div>
    <img src={img} alt={name}/>
    <p>{name}</p>
    <span>{rating}/5</span>
    <span>({reviews} reviews)</span>
    <p>{description}</p>
    </div>
  )
}

export default ProductDetail