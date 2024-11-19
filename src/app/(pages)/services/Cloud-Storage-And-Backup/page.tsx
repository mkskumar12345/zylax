import CloudStorageAndBackup from "@/components/CloudStorageAndBackup/CloudStorageAndBackup";

import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWrapper } from "@/fetcher/fetchWrapper";
import React from "react";

const page = async () => {
  const response = await fetchDataWrapper(
    allApiRoutes?.cloudStorageAndBackup.CLOUD_STORAGE_AND_BACKUP
  );
  return (
    <div>
      <CloudStorageAndBackup pageData={response?.data} />
    </div>
  );
};

export default page;
