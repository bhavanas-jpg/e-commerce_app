import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
     <div style={{display:"flex"}}>
        <h3>Discover</h3>
        <p>notify</p>
     </div>

     <div>
        <input type="search" 
        placeholder="Search anything"
        />
        <span>filter icon</span>
     </div>

     <div style={{display:"flex"}}>
     <button>All</button>
     <button>Men</button>
     <button>Women</button>
     <button>Kids</button>
     </div>
    <Products />
    </div>
  )
}

export default Home