
import { csrfFetch } from './csrf';


const SET_SPOTS = 'spots/setSpots'

const SET_SPOT_BY_ID = 'spot/setSpotById'
//action creator.. passing in spots to set to my action.payload 

const setSpots = (spots) => {
    return {
        type: SET_SPOTS,
        payload: spots
      };
}

const setSpotById = (spot) => {
    return{
        type: SET_SPOT_BY_ID,
        payload:spot
    }
}

//thunk to handle my async calls to the backend 

export const retreiveSpots = () => async (dispatch) => { 
    const response = await csrfFetch('/api/spots');
    const data = await response.json();
    dispatch(setSpots(data))
}

export const retreiveSpotByID = (id) => async (dispatch) => { 
    const response = await csrfFetch(`/api/spots/${id}`);
    const data = await response.json();
    dispatch(setSpotById(data))
}

const initialState = { allSpots: [], singleSpot:null}

//reducer to set the state 
const spotReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_SPOTS:
         return {...state, allSpots:action.payload.Spots}
         case SET_SPOT_BY_ID:
            return {...state, singleSpot: action.payload}
        default:
          return state;
      }
    };


    export default spotReducer