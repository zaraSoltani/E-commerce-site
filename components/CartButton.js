"use client";

import React from "react";
import styles from "../styles/CartButton.module.css";
import { totalCartItemsSelector } from "../store/features/cartSlice";
import { useAppSelector } from "../store/store";

export const CartButton = () => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <div className={styles.container}>
      <img src="../images/kassa.svg" alt="cart" />
      {!!totalItems && (
        <div className={styles.cartButton} key={totalItems}>
          {totalItems}
        </div>
      )}
    </div>
  );
};
