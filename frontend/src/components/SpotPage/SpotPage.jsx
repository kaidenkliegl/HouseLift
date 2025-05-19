import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { retreiveSpotByID } from "../../store/spots";
import SpotReviews from "../reviews/SpotReviews";
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
    dispatch(dismountSpot());
  }, [location]);

  if (spot) {
    return (
      <>
        <div className="spot-header">
          <p>{spot.city + ", " + spot.state + ", " + spot.country}</p>
          <div className="share-like-btns">
            <button className="share-btn">
              <img
                className="download-icon"
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/download--v1.png"
                alt="download--v1"
              />
              <h5>Share</h5>
            </button>
            <button className="like-btn">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/facebook-like--v1.png"
                alt="facebook-like--v1"
              />
            </button>
          </div>
        </div>
        <SpotImages spot={spot}></SpotImages>

        <div className="spotpage-main-div">
          <div>
            <h2>
              Hosted by {spot.Owner.firstName} {spot.Owner.lastName}
            </h2>
            <p className="spot-description">{spot.description}</p>
            <br />
            <hr />
            <br />
            <SpotReviews spotId={id} price={spot.price} className="reviews" />
          </div>
          <div className="reserve-btn-box">
            <div className="price-and-stars">
              <h4 className="price">${spot.price} night</h4>
              {spot.avgStarRating ? (
                <div className="star-rating">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios-filled/50/star--v1.png"
                    alt="star--v1"
                  />
                  <p className="spotInfo starRating">{spot.avgStarRating}</p>
                </div>
              ) : (
                <h4>New</h4>
              )}
            </div>
            <button
              className="reserve-btn"
              onClick={() => alert("Feature coming soon!")}
            >
              RESERVE
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading....</h1>;
  }
}

export default SpotPage;
