import ComputerRepairs from "@/components/Computer-Repairs/ComputerRepairs";
import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWrapper } from "@/fetcher/fetchWrapper";
import React from "react";

const page = async () => {
  const response = await fetchDataWrapper(
    allApiRoutes?.ComputerRepairs.Computer_Repairs
  );
  return (
    <div>
      <ComputerRepairs pageData={response?.data} />
    </div>
  );
};

export default page;
