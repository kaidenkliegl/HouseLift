import "./DeleteModal.css";
import { useModal } from "../../context/Modal";

function DeleteModal({ func, spot }) {
    const { closeModal } = useModal();
  return (
    <div className="dlt-modal">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to remove this listing from your profile?</p>
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
      className="go-back-btn"
        onClick={() => {
          closeModal()
        }}
      >
        No, go back
      </button>
    </div>
  );
}

export default DeleteModal;
