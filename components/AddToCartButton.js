"use client";
import React from "react";
import QuantityButton from "./QuantityButton";
import styles from "../styles/AddToCartButton.module.css";
import {
  decrement,
  increment,
  productQuantityInCartSelector,
} from "../store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

const AddToCartButton = (props) => {
  const qty = useAppSelector((state) =>
    productQuantityInCartSelector(state, props.product.id)
  );
  const dispatch = useAppDispatch();
  if (!qty)
    return (
      <div className={styles.container}>
        <button onClick={() => dispatch(increment(props.product))}>
          Add To Cart
        </button>
      </div>
    );
  return (
    <QuantityButton
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      qty={qty}
    />
  );
};

export default AddToCartButton;
