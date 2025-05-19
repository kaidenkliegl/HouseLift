import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useModal } from "../../context/Modal"; 
import { createNewReview } from "../../store/reviews";
import { retreiveSpotByID } from "../../store/spots";
import "./ReviewForm.css"


function ReviewFormModal({spotId}) {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.session.user?.id);
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0);
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      spotId:parseInt(spotId),
      review,
      stars: parseInt(stars),
    };

    return dispatch(createNewReview(newReview))
      .then(() => {
        dispatch(retreiveSpotByID(spotId));
        closeModal()})
      .catch(async (res) => {
        const data = await res.json();
        if (data?.errors) setErrors(data.errors);
      });

  };

  return (
    <form onSubmit={handleSubmit} className="reviewForm">
      <h1 className="formItem">How was your stay?</h1>

      <textarea
        id="review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
        className="formItem"
        placeholder="Leave your review here"
      />

      <div className="formItem">
        <label>Stars:</label>
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star}>
            <input
              type="radio"
              name="stars"
              value={star}
              checked={parseInt(stars) === star}
              onChange={(e) => setStars(e.target.value)}
              required
            />
            {star}
          </label>
        ))}
      </div>

      {errors.review && <p className="error">{errors.review}</p>}
      {errors.stars && <p className="error">{errors.stars}</p>}

      <button type="submit" className="review-submit-btn" disabled={review.length <= 10}>Submit your review</button>
    </form>
  );
}

export default ReviewFormModal;
