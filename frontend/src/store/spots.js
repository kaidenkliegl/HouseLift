import { csrfFetch } from "./csrf";

const SET_SPOTS = "spots/setSpots";

const CREATE_SPOT = "spot/createSpot";

const SET_SPOT_BY_ID = "spot/setSpotById";

const SET_USER_SPOTS = "spots/setUserSpots";

const DELETE_SPOT = "spot/deleteSpot";

const UPDATE_SPOT = "spot/updateSpot";

const DISMOUNT_SPOT = "spots/dismountSpot";

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

const deleteSpot = (spotId) => {
  return {
    type: DELETE_SPOT,
    payload: spotId,
  };
};

const updateSpot = (spot) => {
  return {
    type: UPDATE_SPOT,
    payload: spot,
  };
};

export const dismountSpot = () => {
  return {
    type: DISMOUNT_SPOT,
  };
};

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

export const deleteUserSpot = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`, {
    method: "DELETE",
  });
  dispatch(deleteSpot(spotId));
};

export const editSpot = (spotId, spotInfo) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spotData),
  });
  const updatedSpot = await res.json();
  dispatch(updateSpot(updatedSpot));
};

const initialState = { allSpots: [], singleSpot: null, userSpots: null };

//reducer to set the state
const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOTS:
      return { ...state, allSpots: action.payload.Spots };
    case SET_SPOT_BY_ID:
      return { ...state, singleSpot: action.payload };
    case UPDATE_SPOT:
      return {
        ...state,
        allSpots: { ...state.allSpots, [action.spot.id]: action.spot },
      };
    case SET_USER_SPOTS:
      return { userSpots: action.payload.Spots };
    case DELETE_SPOT:
      return {
        ...state,
        userSpots: state.userSpots.filter((spot) => spot.id !== action.payload),
      };
    case DISMOUNT_SPOT:
      return {
        ...state,
        singleSpot: null,
      };
    default:
      return state;
  }
};

export default spotReducer;
