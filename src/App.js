import { Route, Routes } from "react-router-dom";
import "./App.css";
import Restaurants from "./Pages/Restaurants/restaurants";
import RestaurantDetails from "./Pages/RestaurantDetails/restaurantDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/:restaurantName" element={<RestaurantDetails />} />
      </Routes>
    </div>
  );
}

export default App;
