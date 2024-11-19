import MobileRepairs from "@/components/MobileRepairs/MobileRepairs";
import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWrapper } from "@/fetcher/fetchWrapper";
import React from "react";

const page = async () => {
  const response = await fetchDataWrapper(
    allApiRoutes?.MobileRepairs.Mobile_Repairs
  );
  return (
    <div>
      <MobileRepairs pageData={response?.data} />
    </div>
  );
};

export default page;
