import MyProfile from "@/components/MyProfile/MyProfile";
import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWithHeaders } from "@/fetcher/fetchWrapper";
import { getApiTokenHeader } from "@/lib/utils";
import { getStateListActions } from "@/serverActions/commonActions";
import { getToken } from "@/serverActions/cookies";
import React from "react";

const page = async () => {
  const stateList = await getStateListActions();

  const token = await getToken();
  const response = await fetchDataWithHeaders(allApiRoutes.profile.PROFILE, {
    headers: getApiTokenHeader(token?.authToken),
  });

  return (
    <div>
      <MyProfile stateList={stateList.data} profileData={response?.data?.data} />
    </div>
  );
};

export default page;
