import MyProfile from "@/components/MyProfile/MyProfile";
import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWithHeaders } from "@/fetcher/fetchWrapper";
import { getToken } from "@/serverActions/cookies";
import React from "react";

const page = async () => {
  const token = await getToken();
  const response = await fetchDataWithHeaders(allApiRoutes.profile.PROFILE, {
    "x-access-token": token?.authToken || "",
  });
  console.log("---------------", response?.data); // For debugging; remove in production

  return (
    <div>
      <MyProfile profileData={response?.data} />
    </div>
  );
};

export default page;
