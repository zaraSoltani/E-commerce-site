"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

const Providers = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Providers;
