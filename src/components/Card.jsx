import React from 'react'
import Detail from "../pages/Detail"
import { useNavigate } from 'react-router-dom';

const Card = ({product}) => {
    const {name,price, discount, img } = product ?? {}; 

  return (
    <div className="card">
     <p>{name}</p>
     <p>INR {price}
     {discount ? <span> -{discount }% </span> : null } 
     </p>
    </div>
  )
}

export default Card