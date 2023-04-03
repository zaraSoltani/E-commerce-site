"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image/Image";
import BuyButton from "@/components/BuyButton";
import QuantityButton from "../components/QuantityButton";
import styles from "../styles/Cart.module.css";
import { TotalPriceSelector } from "../store/features/cartSlice";
import { useAppSelector } from "../store/store";

import { decrement, increment } from "../store/features/cartSlice";
import { useAppDispatch } from "../store/store";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useAppSelector(TotalPriceSelector);
  const dispatch = useAppDispatch();

  return (
    <>
      <Header />
      <main>
        {cartItems.map((item) => (
          <div className={styles.container}>
            <Image
              src={item.product.mainImage.url}
              alt={item.product.name}
              layout="fill"
            />

            <div className={styles.details}>
              <div className={styles.name}>
                <p>{item.product.name}</p>
              </div>
              <div className={styles.price}>
                <QuantityButton
                  qty={item.qty}
                  onDecrease={() => dispatch(decrement(item.product))}
                  onIncrease={() => dispatch(increment(item.product))}
                />
              </div>
              <div className={styles.totalItemPrice}>
                <p>{item.qty * item.product.price}kr</p>
              </div>
              <BuyButton />
            </div>
          </div>
        ))}
        <div className={styles.totalPrice}>
          <p>
            Total Price: <span>{totalPrice} kr</span>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
