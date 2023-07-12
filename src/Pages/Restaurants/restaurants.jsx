import React, { useContext } from "react";
import "./restaurants.css";
import { cuisineData } from "../../Data/data";
import { RestaurantContext } from "../../Contexts/restaurantContext";
import MenuCard from "../../Components/MenuCard/menuCard";

const Restaurants = () => {
  const { restaurantState, restaurantDispatch } = useContext(RestaurantContext);

  const selectCuisineHandler = (cuisine) => {
    restaurantDispatch({ type: "SELECT_CUISINE", payload: cuisine.id });
  };

  let filteredData = [];

  if (restaurantState.cuisineId) {
    filteredData = restaurantState.restaurantData?.filter(
      ({ cuisine_id }) => cuisine_id === Number(restaurantState.cuisineId)
    );
  }

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
      <div className="restaurant-list">
        {filteredData?.map((restaurant) => (
          <div>
            <h2>Dishes by {restaurant?.name}</h2>
            <div className="menu-list">
              {restaurant?.menu?.map((menu) => (
                <div key={menu.name}>
                  <MenuCard menu={menu} restaurantName={restaurant.name} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
