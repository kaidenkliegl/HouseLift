import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUserReview, fetchReviews } from "../../store/reviews";
import "./SpotReviews.css";
import ReviewFormModal from "../Reviews/ReviewFormModal";
import OpenModalButton from "../OpenModalButton";
import { retreiveSpotByID } from "../../store/spots";
import DeleteReviewModal from "../Reviews/DeleteReviewModal";

function SpotReviews({ spotId, price }) {
  const dispatch = useDispatch();
  const reviewsState = useSelector((state) => state.reviews);
  const currentUser = useSelector((state) => state.session.user);
  const spotReviews = reviewsState.spotReviews;
  const spot = useSelector((state) => state.spots.singleSpot);

  const handleDelete = async (reviewId) => {
    await dispatch(deleteUserReview(reviewId));
    dispatch(retreiveSpotByID(spotId));
  };

  useEffect(() => {
    dispatch(fetchReviews(spotId, price));
  }, [dispatch, spotId, price]);

  return (
    <div className="spotReviews">
      <div className="review-header-section">
        <h3 id="review-title">Reviews</h3>
        <h3 id="review-header">Discover what others think</h3>
        <div className="review-count-div">
          {spot.numReviews > 0 ? (
            <>
              <h4>
                {spot.numReviews} {spot.numReviews === 1 ? "Review" : "Reviews"}
              </h4>
              <div className="star-rating">
                <img
                  id="rating-dot"
                  src="https://img.icons8.com/material-sharp/24/full-stop.png"
                  alt="full-stop"
                />
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios-filled/50/star--v1.png"
                  alt="star--v1"
                />
                <p className="spotInfo starRating">{spot.avgStarRating}</p>
              </div>
            </>
          ) : (
            <h4>New</h4>
          )}
        </div>
      

      {currentUser && currentUser.id !== spot.ownerId && (
        <OpenModalButton
          buttonText="Post Your Review"
          className="review-btn"
          modalComponent={
            <ReviewFormModal
              spotId={spotId}
              onReviewSubmit={() => {
                dispatch(retreiveSpotByID(spotId));
              }}
            />
          }
        />
      )}
</div>
      {spotReviews.length === 0 ? (
        <p>Be the first to leave a review!</p>
      ) : (
        <ul id="review-grid">
          {spotReviews.map((spotReview) => {
            const date = new Date(spotReview.createdAt);
            const monthYear = date.toLocaleString("default", {
              month: "long",
              year: "numeric",
            });

            return (
              <li className="review-card" key={spotReview.id}>
                <h3>
                  <strong>{spotReview.User?.firstName}</strong>
                </h3>
                <p className="review-date">{monthYear}</p>
                <p className="review-text">{spotReview.review}</p>
                {currentUser?.id === spotReview.userId && (
                  <OpenModalButton
                    buttonText="Delete"
                    className="delete-btn"
                    modalComponent={
                      <DeleteReviewModal
                        spot={spot}
                        func={() => handleDelete(spotReview.id)}
                      />
                    }
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SpotReviews;
