import styles from "../styles/Modal.module.css";
import { useRef } from "react";

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  const handleBackgroundClick = (event) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div
      className={styles.modalBackground}
      ref={modalRef}
      onClick={handleBackgroundClick}
    >
      <div className={styles.modalContent}>
        <h2>Thank you for your order! </h2>
        <p>
          We are thrilled to confirm that your order has been successfully
          placed with Consid. Thank you for choosing us for your shopping needs.
        </p>
      </div>
    </div>
  );
};

export default Modal;
