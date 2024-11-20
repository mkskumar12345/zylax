import Wishlist from "@/components/Wishlist/Wishlist";
import { getFavoriteProductsActions } from "@/serverActions/wishlistActions";
import React from "react";

const page = async () => {
  const response = await getFavoriteProductsActions();
  return <Wishlist wishlist={response?.data} />;
};

export default page;
