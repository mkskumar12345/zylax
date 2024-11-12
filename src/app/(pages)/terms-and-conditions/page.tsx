import TermsAndConditions from "@/app/_components/TermsAndConditions/TermsAndConditions";
import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWrapper } from "@/fetcher/fetchWrapper";
import React from "react";

const page = async () => {
  const response = await fetchDataWrapper(
    allApiRoutes?.termsAndCondition.TERMS_AND_CONDITION
  );

  return <TermsAndConditions pageData={response?.data} />;
};

export default page;
