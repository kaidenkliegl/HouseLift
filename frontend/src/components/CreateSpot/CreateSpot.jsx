import { useDispatch } from "react-redux";
import { createNewSpot } from "../../store/spots";
import { useState } from "react";
import "./CreateSpot.css";
import { useNavigate } from "react-router-dom";

function CreateSpot() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  
  // images as objects with url + preview flag
  const [images, setImages] = useState([
    { url: "", preview: false },
    { url: "", preview: false },
    { url: "", preview: false },
    { url: "", preview: false },
    { url: "", preview: false },
  ]);

  const [page, setPage] = useState(1);
  const nextPage = () => setPage((prev) => prev + 1);
  const previousPage = () => setPage((prev) => prev - 1);

  // Update url or preview in images state
  const handleImageChange = (index, field, value) => {
    const newImages = [...images];
    if (field === "preview") {
      // Set all previews false except the selected one
      newImages.forEach((img, i) => {
        img.preview = i === index;
      });
    } else if (field === "url") {
      newImages[index].url = value;
    }
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Filter out images without URL
    const filteredImages = images.filter((img) => img.url.trim() !== "");

    const newSpot = await dispatch(
      createNewSpot({
        country,
        address,
        city,
        state,
        description,
        name,
        price,
        images: filteredImages,
      })
    );

    if (newSpot && newSpot.id) {
      // Clear form
      setCountry("");
      setAddress("");
      setCity("");
      setState("");
      setDescription("");
      setName("");
      setPrice("");
      setImages([
        { url: "", preview: false },
        { url: "", preview: false },
        { url: "", preview: false },
        { url: "", preview: false },
        { url: "", preview: false },
      ]);
      navigate(`/spots/current`);
    }
  };

  const isPage1Valid = country && address && city && state;
  const isPage2Valid =
    description.length >= 30 && name !== "" && Number(price) > 0;

  return (
    <form onSubmit={handleSubmit}>
      {page === 1 && (
        <div className="form-section-div">
          <h2>Where&apos;s your place located?</h2>
          <p>
            Guests will only get the exact address once they booked a reservation.
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
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="next-btn" onClick={nextPage} disabled={!isPage1Valid}>
            Next
          </button>
        </div>
      )}

      {page === 2 && (
        <div className="form-section-div">
          <div className="input-label-div">
            <label htmlFor="description">Describe your place to your guests</label>
            <p>
              Mention the best features of your space and any special ammenities like fast wifi or parking.
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
              Catch guests&apos; attention with a spot title that highlights what makes your place special.
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
              Competitive pricing can help your listing stand out and rank higher in search results.
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
            <button className="next-btn" onClick={nextPage} disabled={!isPage2Valid}>
              Next
            </button>
          </div>
        </div>
      )}

      {page === 3 && (
        <div>
          <h2>Upload up to 5 image URLs</h2>
          {images.map((img, index) => (
            <div className="input-label-div" key={index}>
              <label htmlFor={`image-${index}`}>Image URL {index + 1}</label>
              <input
                id={`image-${index}`}
                type="url"
                value={img.url}
                onChange={(e) => handleImageChange(index, "url", e.target.value)}
                placeholder="Image URL"
              />
              <label>
                <input
                  type="radio"
                  name="preview"
                  checked={img.preview}
                  onChange={() => handleImageChange(index, "preview", true)}
                />
                Set as preview image
              </label>
              {img.url && (
                <img
                  src={img.url}
                  alt={`Preview ${index + 1}`}
                  style={{ width: "100px", marginTop: "5px" }}
                />
              )}
            </div>
          ))}
          <div className="btn-box">
            <button className="back-btn" type="button" onClick={previousPage}>
              Back
            </button>
            <button className="submit-btn" type="submit">
              Create Spot
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default CreateSpot;
