import ManageSpots from "./ManageSpots"
import { Link } from "react-router-dom"

function MySpot({spot}){
    console.log('this is spots' + spot)
    return(
        <Link to={`/spots/${spot.id}`}>
            <img src={spot.previewImage} alt="" className="spotImage" />
            <h2 className="spotInfo spotCity">{spot.city + ', ' + spot.state}</h2>
            <h4 className="spotPrice">${spot.price}/night</h4>
            <p className="spotInfo starRating">{spot.avgStarRating}</p>
            <button>Update</button>
            <button>delete</button>
          </Link>
    )
}

export default MySpot