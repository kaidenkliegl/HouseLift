import { csrfFetch } from "./csrf";

const SET_REVIEWS = "reviews/getReviews";

const CREATE_REVIEW = "review/createReview";

const setReviews = (reviews) => {
  return {
    type: SET_REVIEWS,
    payload: reviews,
  };
};

const addReview = (review) => {
  return {
    type: CREATE_REVIEW,
    payload: review,
  };
};

export const fetchReviews = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}/reviews`);
  const data = await response.json();
  dispatch(setReviews(data.Reviews));
};

export const createNewReview = (review) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${review.spotId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
     
    });
    const data = await res.json();
    dispatch(addReview(data));
  };

const initialState = { spotReviews: [] };

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REVIEWS:
      return { ...state, spotReviews: action.payload };
      case CREATE_REVIEW:
        return { 
            ...state, 
            spotReviews: [...state.spotReviews, action.payload] 
          };
    default:
      return state;
  }
};

export default reviewsReducer;
