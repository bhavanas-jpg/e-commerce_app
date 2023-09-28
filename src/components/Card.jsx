import React from 'react'
import Detail from "../pages/Detail"
import { useNavigate } from 'react-router-dom';

const Card = ({product}) => {
    const {name,price, discount, img, id } = product ?? {}; 
    const navigate = useNavigate();

  return (
    <div className="card"
    onClick={()=>navigate(`/product/${id}`)}
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