import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "./slices/cartSlice";
import { useGetCartQuery } from "./apiServices/cartApi";
import { getToken } from "@/serverActions/cookies";

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
