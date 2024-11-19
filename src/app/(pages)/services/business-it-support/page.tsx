import BussinessAndItSupport from "@/app/_components/BusinessItSupport/BussinessItSupport";

import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWrapper } from "@/fetcher/fetchWrapper";
import React from "react";

const page = async () => {
  const response = await fetchDataWrapper(
    allApiRoutes?.businessAndItSupport.BUSINESS_AND_IT_SUPPORT
  );

  return <BussinessAndItSupport pageData={response?.data} />;
};

export default page;
