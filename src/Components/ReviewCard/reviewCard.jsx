import React from "react";
import "./reviewCard.css";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="user-details">
        <div>
          <img src={review.pp} alt={review.revName} />
          <h3>{review.revName}</h3>
        </div>
        <p>{review.comment}</p>
      </div>
      <div className="rating">
        <strong>{review.rating}</strong>
        <i className="fa-regular fa-star"></i>
      </div>
    </div>
  );
};

export default ReviewCard;
