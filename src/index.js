import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import RestaurantProvider from "./Contexts/restaurantContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <RestaurantProvider>
        <App />
      </RestaurantProvider>
    </Router>
  </React.StrictMode>
);
