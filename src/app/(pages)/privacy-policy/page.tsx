import PrivacyPolicy from "@/app/_components/PrivacyPolicy/PrivacyPolicy";
import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWrapper } from "@/fetcher/fetchWrapper";
import React from "react";

const page = async () => {
  const response = await fetchDataWrapper(
    allApiRoutes?.privacyPolicy?.PRIVACY_POLICY
  );
  console.log(response);

  return <PrivacyPolicy pageData={response?.data} />;
};

export default page;
