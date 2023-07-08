import React, { createContext, useReducer } from "react";
import { restaurantReducer } from "../Reducers/restaurantReducer";
import { cuisineData, restaurantsData } from "../Data/data";

export const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
  const initialState = {
    cuisineData: cuisineData,
    restaurantData: restaurantsData,
    cuisineId: "",
  };
  const [restaurantState, restaurantDispatch] = useReducer(
    restaurantReducer,
    initialState
  );

  return (
    <RestaurantContext.Provider value={{ restaurantState, restaurantDispatch }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
