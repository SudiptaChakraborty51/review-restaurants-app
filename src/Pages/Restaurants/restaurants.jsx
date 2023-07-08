import React, { useContext } from "react";
import "./restaurants.css";
import { cuisineData } from "../../Data/data";
import { RestaurantContext } from "../../Contexts/restaurantContext";

const Restaurants = () => {
  const { restaurantState, restaurantDispatch } = useContext(RestaurantContext);

  const selectCuisineHandler = (cuisine) => {
    restaurantDispatch({ type: "SELECT_CUISINE", payload: cuisine.name });
  };

  return (
    <div>
      <h1>Food Ordering App</h1>
      <h2>Select Your Cuisine:</h2>
      <div className="cuisine-button-container">
        {cuisineData?.map((cuisine) => (
          <button
            key={cuisine.id}
            className="cuisine-button"
            onClick={() => selectCuisineHandler(cuisine)}
          >
            {cuisine.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
