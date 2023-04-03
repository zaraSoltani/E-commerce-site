import Modal from "./Modal";
import styles from "../styles/BuyButton.module.css";
import { useState } from "react";

const BuyButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBuyButtonClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleBuyButtonClick} className={styles.buyButton}>
        Buy Now
      </button>
      {showModal && <Modal onClose={handleModalClose} />}
    </>
  );
};

export default BuyButton;
