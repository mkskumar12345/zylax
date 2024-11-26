import ServicePage from "@/components/ServicePage/ServicePage";
import getServicesRouteAndPath from "@/constants/servicesRouteWithSlug";
import { fetchDataWrapper } from "@/fetcher/fetchWrapper";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  console.log(params);
  const response = await fetchDataWrapper(
    getServicesRouteAndPath(params.slug)?.apiPath
  );

  return <ServicePage pageData={response?.data} />;
};

export default page;
