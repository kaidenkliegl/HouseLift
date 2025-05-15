import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchReviews } from "../../store/reviews";
import "./SpotReviews.css"
import OpenModalButton from "../OpenModalButton";
import ReviewForm from "./ReviewFormModal";

function SpotReviews({ spotId, price }) {
  const dispatch = useDispatch();
  const reviewsState = useSelector((state) => state.reviews);
  const spotReviews = reviewsState.spotReviews;
  console.log(spotReviews);
  useEffect(() => {
    dispatch(fetchReviews(spotId, price));
  }, [dispatch, spotId]);
  return (
  
    <div className="spotReviews">
      <OpenModalButton
    buttonText="Leave a Review"
    modalComponent={<ReviewForm spotId={spotId} />}
  />
      <ul>
        {spotReviews.map((spotReview) => {
          return (
            <li key={spotReview.id}>
              <h3>
                {spotReview.User.firstName + " " + spotReview.User.lastName}
              </h3>
              <p>{spotReview.review}</p>
            </li>
          );
        })}
      </ul>
      <div className="reserve-btn-box">
        <div> 
          <h3 className="price">${price}/night</h3>
        <h4>new</h4>
        </div>
       <button>RESERVE</button>
      </div>
    </div>
  );
}

export default SpotReviews;
