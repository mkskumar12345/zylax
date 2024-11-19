import ProductDetails from "@/app/_components/ProductDetails/ProductDetails";
import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWrapper } from "@/fetcher/fetchWrapper";
import React from "react";

const page = async ({ params }: { params: { product: string } }) => {
  const productDetails = await fetchDataWrapper(
    `${allApiRoutes.products.PRODUCTS}/${params.product}`
  );
  return <ProductDetails productDetails={productDetails?.data?.data} />;
};

export default page;
