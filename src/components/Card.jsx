import React from 'react'
import Detail from "../pages/Detail"
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
     <p>{name}</p>
     <p>INR {price}
     {discount ? <span> -{discount }% </span> : null } 
     </p>
    </div>
  )
}

export default Card