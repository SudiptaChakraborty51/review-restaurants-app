import React, { useContext, useState } from "react";
import "./restaurantDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { RestaurantContext } from "../../Contexts/restaurantContext";
import ReviewCard from "../../Components/ReviewCard/reviewCard";
import ReviewModal from "../../Components/ReviewModal/reviewModal";

const RestaurantDetails = () => {
  const { restaurantName } = useParams();
  const { restaurantState } = useContext(RestaurantContext);

  const navigate = useNavigate();

  const selectedRestaurant = restaurantState?.restaurantData?.find(
    ({ name }) => name === restaurantName
  );

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="restaurant-details">
      {showModal && (
        <ReviewModal setShowModal={setShowModal} id={selectedRestaurant?.id} />
      )}
      <i
        className="fa-solid fa-arrow-left"
        onClick={() => {
          restaurantState.cuisineId = "";
          navigate("/");
        }}
      ></i>
      <div className="restaurant-details-container">
        <h1>{selectedRestaurant?.name}</h1>
        <div className="restaurant-details-content">
          <div>
            <p>
              {selectedRestaurant?.menu?.map((item) => item?.name).join(", ")}
            </p>
            <p>{selectedRestaurant?.address}</p>
            <p>Contact: {selectedRestaurant?.phone}</p>
            <p>Average Rating: {selectedRestaurant?.averageRating}</p>
          </div>
          <button onClick={() => setShowModal(true)}>Add Review</button>
        </div>
        <div className="review-container">
          <h2>Reviews</h2>
          <div className="review-details-container">
            {selectedRestaurant?.ratings.map((review) => (
              <ReviewCard review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
