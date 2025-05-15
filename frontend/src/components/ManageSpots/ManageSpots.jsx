import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { retreiveUserSpots } from "../../store/spots";
import MySpot from "./MySpot";

function ManageSpots() {
  const dispatch = useDispatch();
  const currentSpots = useSelector(state => state.spots.userSpots)
  useEffect(() => {
    dispatch(retreiveUserSpots());
  }, [dispatch]);
  return (
    <>
      <h1>My Listings</h1>
      <div className="spotGrid">
        {currentSpots?.map((spot) => (
          <MySpot key={spot.id} spot={spot} />
        ))}
      </div>
    </>
  );
}

export default ManageSpots;
