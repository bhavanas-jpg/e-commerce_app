import React from 'react';
import star from "../assets/star.svg"
import heartIcon from "../assets/activity-heart.svg"

const ProductDetail = ({product}) => {
    const {id,name, description, img, price, rating, reviews} = product;
  return (
    <div className="detail__container" >
    <img 
    className="detail__card--img"
    src={img} alt={name}/>
    <p className="detail__card--name">{name}</p>
   
   <div className="review__sec">
   <img src={star} />
    <span className="rating">{rating}/5</span>
    <span className="review">({reviews} reviews)</span>
   </div>
    
    <p className="description">{description}</p>
    <img 
    className="wishlist__icon "
    src={heartIcon} alt="wishlist-icon" />
    </div>
  )
}

export default ProductDetail