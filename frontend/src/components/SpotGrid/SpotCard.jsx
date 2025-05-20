import { Link } from "react-router-dom";
import "./SpotCard.css";

//this is my individual spot. The spot info is being passed down through a prop from SpotGrid
function SpotCard({ spot }) {
  return (
    <Link to={`/spots/${spot.id}`}>
      <img src={spot.previewImage} alt="" className="spotImage" />
     
        <div className="location-star-rating-div">
          <h3 className="spotInfo spotCity">{spot.city + ", " + spot.state}</h3>{" "}
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

        <h4 className="spotPrice">${Number(spot.price).toFixed(2)}/night</h4>
      
    </Link>
  );
}

export default SpotCard;
