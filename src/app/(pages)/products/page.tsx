import Products from "@/app/_components/Products/Products";
import React from "react";

interface URLSearchParams {
  brand: string | number | undefined;
  category: string | number | undefined;
}
const page = ({ searchParams }: { searchParams: URLSearchParams }) => {
  const brand = searchParams?.brand;
  const category = searchParams?.category;
  return <Products brand={brand} category={category} />;
};

export default page;
