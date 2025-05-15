import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { retreiveSpotByID } from "../../store/spots";
import SpotReviews from "../Reviews/SpotReviews";
import SpotImages from "./SpotImages";
import "./SpotPage.css";

function SpotPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const spot = useSelector((state) => state.spots.singleSpot);
  useEffect(() => {
    dispatch(retreiveSpotByID(id));
  }, [dispatch, id]);

  if (spot) {
    return (
      <>
        <div className="spot-header">
          <h3>{spot.city + ", " + spot.state + ", " + spot.country}</h3>
          <div>
            <button>Share</button>
            <button>Like</button>
          </div>
        </div>
        <SpotImages spot={spot}></SpotImages>
        <div>
          <p>{spot.description}</p>
          <SpotReviews spotId={id} price={spot.price} />
        </div>
      </>
    );
  } else {
    return <h1>Loading....</h1>;
  }
}

export default SpotPage;
