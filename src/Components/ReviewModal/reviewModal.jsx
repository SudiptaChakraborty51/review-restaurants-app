import React, { useContext, useState } from "react";
import "./reviewModal.css";
import { RestaurantContext } from "../../Contexts/restaurantContext";

const ReviewModal = ({ id, setShowModal }) => {
  const { restaurantDispatch } = useContext(RestaurantContext);

  const [reviewInput, setReviewInput] = useState({
    rating: "",
    comment: "",
    revName: "Sudipta",
    pp: "https://res.cloudinary.com/dqlasoiaw/image/upload/v1687677688/tech-social/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6_gu0tvw.jpg",
  });

  const reviewSubmitHandler = () => {
    if (reviewInput?.rating !== "") {
      restaurantDispatch({
        type: "ADD_REVIEW",
        payload: { id: id, review: reviewInput },
      });
    }
    setShowModal(false);
  };

  return (
    <div className="add-review-modal-container">
      <div className="add-review-modal">
        <div className="add-review-modal-header">
          <h2>Add Your Review</h2>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setShowModal(false)}
          ></i>
        </div>
        <div className="modal-content">
          <div>
            <label>Rating: </label>
            <select
              value={reviewInput.rating}
              onChange={(e) =>
                setReviewInput((prev) => ({ ...prev, rating: e.target.value }))
              }
            >
              <option disabled>Select Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <label>Comment: </label>
            <input
              placeholder="add comment"
              type="text"
              className="rating-comment"
              value={reviewInput.comment}
              onChange={(e) =>
                setReviewInput((prev) => ({ ...prev, comment: e.target.value }))
              }
            />
          </div>
        </div>
        <button onClick={reviewSubmitHandler}>Submit</button>
      </div>
    </div>
  );
};

export default ReviewModal;
