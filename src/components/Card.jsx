import React from 'react'
import Detail from "../pages/Detail"
import heart from "../assets/activity-heart.svg"
import { useLocation, useNavigate } from 'react-router-dom';

const Card = ({product}) => {
    const {name,price, discount, img, id } = product ?? {}; 
    const navigate = useNavigate();
    const location = useLocation();

  return (
    <div className="card"
    onClick={()=>
      navigate(`/product/${id}`, { state: { from: location } })}
    >
     <img src={img} alt={name} />
     <p className="product__name">{name}</p>
     <p className="product__price">INR {price}
     {discount ? <span> -{discount }% </span> : null } 
     </p>

     <img
     className="wishlist__icon"
     src={heart} alt="wishlist-icon" />
    </div>
  )
}

export default Card