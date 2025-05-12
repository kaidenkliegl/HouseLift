import { useParams } from "react-router-dom";
import { csrfFetch } from "../../store/csrf";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchReviews } from "../../store/reviews";

function SpotReviews({spotId}) {
  const dispatch = useDispatch();
  const reviewsState = useSelector((state) => state.reviews);
  const spotReviews = reviewsState.spotReviews;
console.log(spotReviews)
  useEffect(() => {
    dispatch(fetchReviews(spotId));
  }, [dispatch, spotId]);
  return (
    <div className="spotReviews">
        <h1>Reviews</h1>
<ul>
    {spotReviews.map(spotReview=> { 
        return (
            <li>
                <h3>{spotReview.User.firstName + " " + spotReview.User.lastName}</h3>
                <p>{spotReview.review}</p>
                </li>
        )
    })}
</ul>
  </div>
  )
  
}

export default SpotReviews
