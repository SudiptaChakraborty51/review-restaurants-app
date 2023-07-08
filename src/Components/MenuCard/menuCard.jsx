import React from "react";
import "./menuCard.css";
import { useNavigate } from "react-router-dom";

const MenuCard = ({ menu, restaurantName }) => {
  const navigate = useNavigate();

  return (
    <div className="menu-card" onClick={() => navigate(`/${restaurantName}`)}>
      <img src={menu?.imgSrc} alt={menu?.name} />
      <div className="menu-card-content">
        <h4>{menu?.name}</h4>
        <p>
          Rs. {menu?.price} for {menu?.qty}
        </p>
        <p>{restaurantName}</p>
      </div>
    </div>
  );
};

export default MenuCard;
