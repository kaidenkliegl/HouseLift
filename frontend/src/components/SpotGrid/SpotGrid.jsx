
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retreiveSpots } from "../../store/spots";
import SpotCard from "./SpotCard";
import './SpotGrid.css'

//this is my individual spot. The spot info is being passed down through a prop from SpotGrid
function SpotGrid() {
const dispatch = useDispatch()
const spots = useSelector((state) => state.spots);
const spotList = spots.allSpots

useEffect(() => { 
    dispatch(retreiveSpots());
  }, [dispatch]);


  return(
  <div className="spotGrid">
{spotList?.map((spot) => (
        <SpotCard key={spot.id} spot={spot} />
      ))}
  </div>
  )
}

export default SpotGrid