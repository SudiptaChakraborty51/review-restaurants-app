import React from "react";
import "./menuCard.css";

const MenuCard = ({ menu, restaurantName }) => {
  return (
    <div className="menu-card">
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
