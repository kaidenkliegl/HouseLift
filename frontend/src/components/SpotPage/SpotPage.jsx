import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { retreiveSpotByID } from "../../store/spots";
import SpotReviews from "../Reviews/SpotReviews";
import SpotImages from "./SpotImages";
import { dismountSpot } from "../../store/spots";

import "./SpotPage.css";

function SpotPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const spot = useSelector((state) => state.spots.singleSpot);
  useEffect(() => {
    dispatch(retreiveSpotByID(id));
  }, [dispatch, id]);

  const location = useLocation();

  useEffect(() => {
   dispatch(dismountSpot())
  }, [location]);

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

        <div className="spotpage-main-div">
          <div>
            <h2>
              Hosted by {spot.Owner.firstName} {spot.Owner.lastName}
            </h2>
            <p>{spot.description}</p>
            <br />
            <hr />
            <br />
            <SpotReviews spotId={id} price={spot.price} className="reviews" />
          </div>
          <div className="reserve-btn-box">
            <div>
              <h3 className="price">${spot.price}/night</h3>
              <h4>new</h4>
            </div>
            <button>RESERVE</button>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading....</h1>;
  }
}

export default SpotPage;
