import Macbookrepairs from "@/components/Macbookrepairs/Macbookrepairs";

import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWrapper } from "@/fetcher/fetchWrapper";
import React from "react";

const page = async () => {
  const response = await fetchDataWrapper(
    allApiRoutes?.macbook_repair.macbook_repair
  );
  return (
    <div>
      <Macbookrepairs pageData={response?.data} />
    </div>
  );
};

export default page;
