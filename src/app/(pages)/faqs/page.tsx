import Faqs from "@/components/Faqs/Faqs";
import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWrapper } from "@/fetcher/fetchWrapper";
import React from "react";

const page = async () => {
  const response = await fetchDataWrapper(allApiRoutes?.faqs.FAQs);
  return (
    <div>
      <Faqs data={response?.data} />
    </div>
  );
};

export default page;
