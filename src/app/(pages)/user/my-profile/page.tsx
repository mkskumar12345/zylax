import MyProfile from "@/components/MyProfile/MyProfile";
import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWithHeaders } from "@/fetcher/fetchWrapper";
import { getToken } from "@/serverActions/cookies";
import React from "react";

const page = async () => {
  try {
    const token = await getToken();
    if (!token.authToken) {
      throw new Error("Authentication token not found");
    }
    
    const response = await fetchDataWithHeaders(allApiRoutes.profile.PROFILE, {
      headers: {
        Authorization: token?.authToken,
      },
    });
    console.log({ token });
    console.log({ response }); // For debugging; remove in production

    return (
      <div>
        <MyProfile />
      </div>
    );
  } catch (error) {
    console.error("Error fetching profile data:", error);
    return (
      <div>
        <p>Error loading profile. Please try again later.</p>
      </div>
    );
  }
};

export default page;
