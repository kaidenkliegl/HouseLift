import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { retreiveSpotByID } from "../../store/spots";
import SpotReviews from "../reviews/SpotReviews";

function SpotPage(){
const dispatch = useDispatch()
const { id } = useParams();
const spot = useSelector(state => state.spots.singleSpot)
useEffect(() => {
    dispatch(retreiveSpotByID(id))
}, [dispatch,id]);

if(spot){
    return(
    <div>
        <img src={spot.SpotImages[0].url} alt="" className="spotImage" /> 
         <h3>{spot.city}</h3>
        <p>{spot.description}</p>
        <SpotReviews spotId={id}/>
    </div>
  
)
}else{
    return(
        <h1>Loading....</h1>
    )
}

}

export default SpotPage
