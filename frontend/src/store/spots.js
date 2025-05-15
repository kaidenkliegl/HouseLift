import { csrfFetch } from "./csrf";

const SET_SPOTS = "spots/setSpots";

const CREATE_SPOT = "spot/createSpot";

const SET_SPOT_BY_ID = "spot/setSpotById";

const SET_USER_SPOTS = "spots/setUserSpots";

const setSpots = (spots) => {
  return {
    type: SET_SPOTS,
    payload: spots,
  };
};

const setSpotById = (spot) => {
  return {
    type: SET_SPOT_BY_ID,
    payload: spot,
  };
};

const setNewSpot = (spot) => {
  return {
    type: CREATE_SPOT,
    payload: spot,
  };
};

const setUserSpots = (spots) => {
  return {
    type: SET_USER_SPOTS,
    payload: spots,
  };
};

//thunk to handle my async calls to the backend

export const retreiveSpots = () => async (dispatch) => {
  const response = await csrfFetch("/api/spots");
  const data = await response.json();
  dispatch(setSpots(data));
};

export const retreiveSpotByID = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${id}`);
  const data = await response.json();
  dispatch(setSpotById(data));
};

export const createNewSpot = (spotInfo) => async (dispatch) => {
  console.log(spotInfo);
  const res = await csrfFetch("/api/spots", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spotInfo),
  });
  const data = await res.json;
  dispatch(setNewSpot(data));
};

export const retreiveUserSpots = () => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/current`);
  const data = await response.json();
  dispatch(setUserSpots(data));
};

const initialState = { allSpots: [], singleSpot: null, userSpots: null };

//reducer to set the state
const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOTS:
      return { ...state, allSpots: action.payload.Spots };
    case SET_SPOT_BY_ID:
      return { ...state, singleSpot: action.payload };
    case SET_USER_SPOTS:
      return { userSpots: action.payload.Spots };
    default:
      return state;
  }
};

export default spotReducer;
