import ImagesModal from "./ImagesModal";
import { useModal } from "../../context/Modal";
import "./SpotImages.css";

function SpotImages({ spot }) {
  const { setModalContent } = useModal();

  const openModal = (imageId) => {
    setModalContent(
      <ImagesModal images={spot.SpotImages} scrollToId={imageId} />
    );
  };

  return (
    <div className="images-grid">
      <img
        src={spot.previewImage}
        alt=""
        className="grid-image-large"
        onClick={() => openModal(spot.SpotImages[0]?.id)}
      />
      {spot.SpotImages.slice(1, 5).map((img) => (
        <img
          key={img.id}
          src={img.url}
          alt=""
          className="grid-image"
          onClick={() => openModal(img.id)}
        />
      ))}
      <button
        className="display-all-btn"
        onClick={() => openModal(spot.SpotImages[0]?.id)}
      >
        Display all photos
      </button>
    </div>
  );
}

export default SpotImages;
