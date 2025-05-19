import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { retreiveSpotByID, editSpot } from "../../store/spots";

function EditSpot() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const spot = useSelector((state) => state.spots.singleSpot);


  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateVal, setStateVal] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState(["", "", "", "", ""]);


  const [page, setPage] = useState(1);

  const nextPage = () => setPage((prev) => prev + 1);
  const previousPage = () => setPage((prev) => prev - 1);

  const isPage1Valid = country && address && city && stateVal;
  const isPage2Valid =
    description.length >= 30 && name !== "" && Number(price) > 0;

  useEffect(() => {
    dispatch(retreiveSpotByID(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (spot) {
      setCountry(spot.country || "");
      setAddress(spot.address || "");
      setCity(spot.city || "");
      setStateVal(spot.state) || ""
      setDescription(spot.description || "");
      setName(spot.name || "");
      setPrice(spot.price || "");
      if (spot.images && spot.images.length > 0) {
        const urls = spot.images.map(img => img.url);
        const filledImages = [...urls, "", "", "", "", ""].slice(0, 5); 
        setImages(filledImages);
      }
    }
  }, [spot]);

  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedSpot = {
      id,
      country,
      address,
      city,
      state: stateVal,
      description,
      name,
      price: parseFloat(price),
      images
    };

    await dispatch(editSpot(id, updatedSpot));
  };

  return (
    <form onSubmit={handleSubmit}>
      {page === 1 && (
        <div className="form-section-div">
          <h2>Where&apos;s your place located?</h2>
          <p>
            Guests will only get the exact address once they booked a
            reservation
          </p>
          <br />
          <div className="input-label-div">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>

          <div className="input-label-div">
            <label htmlFor="street">Street Address:</label>
            <input
              id="address"
              type="text"
              placeholder="Street Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="input-label-div city-state-div">
            <div className="input-group">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="state">State</label>
              <input
                id="state"
                type="text"
                placeholder="State"
                value={stateVal}
                onChange={(e) => setStateVal(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            className="next-btn"
            onClick={nextPage}
            disabled={!isPage1Valid}
          >
            Next
          </button>
        </div>
      )}
      {page === 2 && (
        <div className="form-section-div">
          <div className="input-label-div">
            <label htmlFor="description">
              Describe your place to your guests
            </label>
            <p>
              Mention the best features of your space and any special ammenities
              like fast wifi or parking.{" "}
            </p>
            <textarea
              id="description"
              value={description}
              className="spot-description"
              placeholder="Please write at least 30 characters"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="input-label-div">
            <label htmlFor="name">Create a title for your spot</label>
            <p>
              catch guests attention with a spot title that highlights what
              makes your place special.
            </p>
            <input
              id="name"
              type="text"
              value={name}
              placeholder="Name of Your Spot"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-label-div spot-price-div">
            <label htmlFor="price">Set a base price for your spot</label>
            <p>
              competitive pricing can help your listing stand out and rank
              higher in search results.
            </p>
            <input
              id="price"
              type="number"
              value={price}
              placeholder="Price per Night (USD)"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="btn-box">
            <button className="back-btn" onClick={previousPage}>
              Back
            </button>
            <button
              className="next-btn"
              onClick={nextPage}
              disabled={!isPage2Valid}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {page === 3 && (
        <div>
          {images.map((img, index) => (
            <div className="input-label-div" key={index}>
              <label htmlFor={`image-${index}`}>Image URL</label>
              <input
                id={`image-${index}`}
                type="url"
                value={img}
                onChange={(e) => handleImageChange(index, e.target.value)}
                placeholder="Image URL"
              />
              <button
                type="button"
                onClick={() => {
                  const newImages = images.filter((_, i) => i !== index);
                  setImages(newImages);
                }}
              >
                Delete
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => setImages([...images, ""])}
            style={{ marginTop: "10px" }}
          >
            Add another image
          </button>
          <div className="btn-box">
            <button className="back-btn" type="button" onClick={previousPage}>
              Back
            </button>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
}



export default EditSpot;
