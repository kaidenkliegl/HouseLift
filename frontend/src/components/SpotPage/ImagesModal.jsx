import { useEffect } from "react";
import { useModal } from "../../context/Modal";
import "./ImagesModal.css";

function ImagesModal({ images, scrollToId }) {
  const { closeModal } = useModal();

  useEffect(() => {
    if (scrollToId) {
      const element = document.getElementById(`image-${scrollToId}`);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [scrollToId]);


  window.addEventListener('popstate', (event) => {
    event.stopPropagation();
    event.preventDefault();
   closeModal();
  });


  return (
    <div id="modal-background">
      <div id="images-modal-content">
        {" "}
        <div id="modal-header">
          <button className="close-modal" onClick={closeModal}>
          <img src="https://img.icons8.com/ios-filled/50/back.png" alt="back" className="exit-modal"/>
          </button>
        </div>
        {images.map((img, id) => (
          <img
            key={img.id}
            id={`image-${img.id}`}
            src={img.url}
            alt={`Spot image ${id + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
}

export default ImagesModal;
