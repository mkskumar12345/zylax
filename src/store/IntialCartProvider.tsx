import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "./slices/cartSlice";

const IntialCartProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load cart data from localStorage when the app mounts
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    dispatch(setCart(cartData));
  }, [dispatch]);
  return <>{children}</>;
};

export default IntialCartProvider;
