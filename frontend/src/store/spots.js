import { csrfFetch } from "./csrf";

const SET_SPOTS = "spots/setSpots";

const CREATE_SPOT = "spot/createSpot";

const SET_SPOT_BY_ID = "spot/setSpotById";

const SET_USER_SPOTS = "spots/setUserSpots";

const DELETE_SPOT = "spot/deleteSpot";

const UPDATE_SPOT = "spot/updateSpot";

const DISMOUNT_SPOT = "spots/dismountSpot";

const REMOVE_IMAGE_FROM_SPOT = "spot/removeImageFromSpot";

const ADD_IMAGE_TO_SPOT = "spot/addImageToSpot";


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

const removeImageFromSpot = (imageId) => ({
    type: REMOVE_IMAGE_FROM_SPOT,
    payload: imageId,
  });
  
  const addImageToSpot = (image) => ({
    type: ADD_IMAGE_TO_SPOT,
    payload: image,
  });

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
  const { images, ...spotData } = spotInfo;

  const res = await csrfFetch("/api/spots", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spotData),
  });
  const data = await res.json();
  if (images && images.length > 0) {
    for (const imageObj of images) {
      await csrfFetch(`/api/spots/${data.id}/images`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: imageObj.url,
          preview: imageObj.preview || false,
        }),
      });
    }
  }

  const spotRes = await csrfFetch(`/api/spots/${data.id}`);
  const spotWithImages = await spotRes.json();

  dispatch(setNewSpot(spotWithImages));
  return spotWithImages;
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
  if (res.ok) {
    dispatch(deleteSpot(spotId));
  }
};

export const editSpot = (spotId, spotInfo) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spotInfo),
  });
  const updatedSpot = await res.json();
  dispatch(updateSpot(updatedSpot));
  return updatedSpot
};

export const deleteSpotImage = (imageId) => async (dispatch) => {
    const response = await csrfFetch(`/api/spot-images/${imageId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch(removeImageFromSpot(imageId));
      return true;
    }
    return false;
  };
  
  export const addSpotImage = (spotId, image) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${spotId}/images`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(image),
    });
  
    if (response.ok) {
      const newImage = await response.json();
      dispatch(addImageToSpot(newImage));
      return newImage;
    }
    return null;
  };

const initialState = { allSpots: [], singleSpot: null, userSpots: null };

//reducer to set the state
const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOTS:
      return { ...state, allSpots: action.payload.Spots || action.payload };
    case SET_SPOT_BY_ID:
      return { ...state, singleSpot: action.payload };
    case UPDATE_SPOT:
      return {
        ...state,
        singleSpot: action.payload,
        userSpots: state.userSpots?.map((spot) =>
          spot.id === action.payload.id ? action.payload : spot
        ),
      };
    case SET_USER_SPOTS:
      return { userSpots: action.payload.Spots || action.payload };
    case DELETE_SPOT:
      return {
        ...state,
        userSpots: state.userSpots.filter((spot) => spot.id !== action.payload),
      };
      case REMOVE_IMAGE_FROM_SPOT: {
        if (!state.singleSpot) return state;
        const filteredImages = state.singleSpot.SpotImages.filter(
          (img) => img.id !== action.payload
        );
        return {
          ...state,
          singleSpot: {
            ...state.singleSpot,
            SpotImages: filteredImages,
          },
        };
      }
      
      case ADD_IMAGE_TO_SPOT: {
        if (!state.singleSpot) return state;
        return {
          ...state,
          singleSpot: {
            ...state.singleSpot,
            SpotImages: [...state.singleSpot.SpotImages, action.payload],
          },
        };
      }

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
