import "./DeleteReviewModal.css";
import { useModal } from "../../context/Modal";

function DeleteReviewModal({ func, spot }) {
    const { closeModal } = useModal();
  return (
    <div className="dlt-modal">
      <h2>Confirm Delete</h2>
      <button
      className="dlt-button"
        onClick={() => {
          func(spot);
          closeModal()
         
        }}
      >
        Yes, delete
      </button>
      <button
        onClick={() => {
          closeModal()
        }}
      >
        No, go back
      </button>
    </div>
  );
}

export default DeleteReviewModal;