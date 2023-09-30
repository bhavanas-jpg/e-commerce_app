import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductDetail from "../components/ProductDetail";
import ShopIcon from "../assets/shopping-bag.svg";
import "./Detail.css";
import Header from "../components/Header";

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const sizes = ["S", "M", "L"];

  const product = products.find((product) => product.id === parseInt(id));

  const selectSize = (size) => {
    const sizeValue = sizes.find((sizeItem) => sizeItem === size);
    setSelectedSize(sizeValue);
  };

  return (
    <div className="detail__card">
      <Header heading="Details" />
      <ProductDetail product={product} />
      <p className="size__text">Choose size</p>
      {sizes.map((size, index) => (
        <button
          className="size__button"
          style={{ borderColor: selectedSize === size ? "#000" : "" }}
          onClick={() => selectSize(size)}
          key={index}
        >
          {size}
        </button>
      ))}

      <div
        className="d-flex bottom__sec " >
        <div>
          <p className="price__text">Price</p>
          <p className="price__value">INR {product.price}</p>
        </div>

        <button
          className="cart__btn"
          onClick={() => navigate("/cart", { state: { from: location } })}
        >
          <img src={ShopIcon} alt="shopping-icon" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Detail;
