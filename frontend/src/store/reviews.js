import { csrfFetch } from './csrf';

const SET_REVIEWS = "reviews/getReviews"

const setReviews = (reviews) => { 
    return{
        type:SET_REVIEWS,
        payload:reviews
    }
}

export const fetchReviews = (spotId) => async (dispatch) => { 
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`)
    const data = await response.json()
    dispatch(setReviews(data.Reviews))
}

const initialState = {spotReviews:[]}

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REVIEWS:
         return {...state, spotReviews:action.payload}
        default:
          return state;
      }
}

export default reviewsReducer