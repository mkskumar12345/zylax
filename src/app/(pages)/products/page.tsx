import Products from "@/app/_components/Products/Products";
import React from "react";
interface URLSearchParams {
  brand: string | number | undefined;
}
const page = ({ searchParams }: { searchParams: URLSearchParams }) => {
  const brand = searchParams?.brand;
  return <Products brand={brand} />;
};

export default page;
