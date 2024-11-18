import TabletRepairs from "@/components/TabletRepairs/TabletRepairs";
import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWrapper } from "@/fetcher/fetchWrapper";
import React from "react";

const page = async () => {
  const response = await fetchDataWrapper(
    allApiRoutes?.TabletRepairs.Tablet_Repairs
  );
  return (
    <div>
      <TabletRepairs pageData={response?.data} />
    </div>
  );
};

export default page;
