import React, { useContext } from "react";
import "./restaurantDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { RestaurantContext } from "../../Contexts/restaurantContext";
import ReviewCard from "../../Components/ReviewCard/reviewCard";

const RestaurantDetails = () => {
  const { restaurantName } = useParams();
  const { restaurantState } = useContext(RestaurantContext);

  const navigate = useNavigate();

  const selectedRestaurant = restaurantState?.restaurantData?.find(
    ({ name }) => name === restaurantName
  );

  const { name, address, phone, menu, ratings, averageRating } =
    selectedRestaurant;

  return (
    <div className="restaurant-details">
      <i className="fa-solid fa-arrow-left" onClick={() => navigate("/")}></i>
      <div className="restaurant-details-container">
        <h1>{name}</h1>
        <div className="restaurant-details-content">
          <div>
            <p>{menu?.map((item) => item?.name).join(", ")}</p>
            <p>{address}</p>
            <p>Contact: {phone}</p>
            <p>Average Rating: {averageRating}</p>
          </div>
          <button>Add Review</button>
        </div>
        <div className="review-container">
          <h2>Reviews</h2>
          <div className="review-details-container">
            {ratings.map((review) => (
              <ReviewCard review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
