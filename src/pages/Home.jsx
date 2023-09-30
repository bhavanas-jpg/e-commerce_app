import React from 'react'
import Products from '../components/Products';
import notificationIcon from "../assets/notification_icon.svg";
import filterIcon from "../assets/filter_icon.svg";
import searchIcon from "../assets/search-lg.svg"
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  const location = useLocation();
  
  return (
    <div className="home__container">
     <div className="d-flex">
        <h2 className="heading">Discover</h2>
        <img src={notificationIcon} alt="notification icon"/>
     </div>

     <div className="d-flex mt-20">
      <div className="search__container">
        <img src={searchIcon} alt="search-icon"/>
      <input 
      className="search__input"
      type="search"  placeholder="Search anything" />
      </div>
     
       <img 
       className="filter_img"
       src={filterIcon} alt="filter icon" />
     </div>

     <div className="category__container">
     <button className="active__category">All</button>
     <button>Men</button>
     <button>Women</button>
     <button>Kids</button>
     </div>
    <Products />
    <Navbar />
    </div>
  )
}

export default Home