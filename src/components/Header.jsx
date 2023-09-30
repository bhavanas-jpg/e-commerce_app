import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backArrow from "../assets/arrow-right.svg";
import notification from "../assets/notification_icon.svg";
import ".././pages/Detail.css";

const Header = ({ heading }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="header">
      <img
        onClick={() => navigate(location?.state?.from)}
        src={backArrow}
        alt="back arrow icon"
      />
      <h3 className="detail__card--heading">{heading}</h3>
      <img src={notification} alt="notification arrow" />
    </div>
  );
};

export default Header;
