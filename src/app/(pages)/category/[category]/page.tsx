import Category from "@/app/_components/Category/Category";
import React from "react";

interface URLSearchParams {
  brand: string | number | undefined;
}
const page = ({ searchParams }: { searchParams: URLSearchParams }) => {
  const brand = searchParams?.brand;
  return <Category brand={brand} />;
};

export default page;
