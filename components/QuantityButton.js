import React from "react";
import styles from "../styles/QuantityButton.module.css";

const QuantityButton = (props) => {
  return (
    <div className={styles.quantityButtonContainer}>
      <button className={styles.button} onClick={props.onDecrease}>
        {"-"}
      </button>
      <p>{props.qty}</p>
      <button className={styles.button} onClick={props.onIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantityButton;
