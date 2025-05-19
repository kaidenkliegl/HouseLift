import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUserSpot, retreiveUserSpots } from "../../store/spots";
import MySpot from "./MySpot";
import { Link } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import DeleteModal from "./DeleteModal";
deleteUserSpot;

function ManageSpots() {
  const dispatch = useDispatch();
  const currentSpots = useSelector((state) => state.spots.userSpots);
  useEffect(() => {
    dispatch(retreiveUserSpots());
  }, [dispatch]);

  const handleDelete = (spot) => {
    dispatch(deleteUserSpot(spot.id));
  };


  return (
    <>
    <h2>Manage Listings</h2>
      {currentSpots?.length === 0 ? (
        <Link to="/spots/new">Create New Listing</Link>
      ) : (
        <>
          <div className="spotGrid">
            {currentSpots?.map((spot) => (
              <div key={spot.id}>
                <MySpot spot={spot} />
                <OpenModalButton
                  buttonText="Delete"
                  modalComponent={<DeleteModal spot={spot} func={handleDelete} />}
                />
                <Link to={`/spots/${spot.id}/edit`}>
                  <button>Update</button>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default ManageSpots;
