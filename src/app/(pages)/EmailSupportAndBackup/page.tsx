import EmailSupportAndBackup from "@/components/EmailSupportAndBackup/EmailSupportAndBackup";

import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWrapper } from "@/fetcher/fetchWrapper";
import React from "react";

const page = async () => {
  const response = await fetchDataWrapper(
    allApiRoutes?.EmailSupportAndBackup.Email_Support_And_Backup
  );
  return (
    <div>
      <EmailSupportAndBackup pageData={response?.data} />
    </div>
  );
};

export default page;
