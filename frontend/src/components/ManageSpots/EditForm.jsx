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

  useEffect(() => {
    dispatch(retreiveSpotByID(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (spot) {
      setCountry(spot.country || "");
      setAddress(spot.address || "");
      setCity(spot.city || "");
      setStateVal(spot.state || "");
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
      <div className="input-label-div">
        <label htmlFor="country">Country</label>
        <input
          id="country"
          type="text"
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
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div className="input-label-div">
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>

      <div className="input-label-div">
        <label htmlFor="state">State</label>
        <input
          id="state"
          type="text"
          value={stateVal}
          onChange={(e) => setStateVal(e.target.value)}
          required
        />
      </div>

      <div className="input-label-div">
        <label htmlFor="description">Describe your place to your guests</label>
        <p>
          Mention the best features of your space and any special ammenities
          like fast wifi or parking.{" "}
        </p>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="input-label-div">
        <label htmlFor="name">Name of Your Spot</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="input-label-div">
        <label htmlFor="price">Price per Night (USD):</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      {[0, 1, 2, 3, 4].map((index) => (
        <div className="input-label-div" key={index}>
          <label htmlFor={`image-${index}`}>Image URL {index + 1}:</label>
          <input
            id={`image-${index}`}
            type="url"
            value={images[index]}
            onChange={(e) => handleImageChange(index, e.target.value)}
            placeholder="Image URL"
          />
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}

export default EditSpot;
