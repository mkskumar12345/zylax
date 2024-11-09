"use server";

import { fetchDataWithHeaders, fetchDataWrapper } from "@/fetcher/fetchWrapper";
import { cookies } from "next/headers";

export const clearCookies = () => {
  cookies().delete("token");
};

export const getToken = () => {
  try {
    const token = cookies().get("token");
    return { authToken: token ? JSON.parse(token.value) : null };
  } catch (error: any) {
    return error.response.data || { success: false, message: "No token found" };
  }
};

export const logOutHandler = async () => {
  try {
    const token = getToken();
    const { data } = await fetchDataWithHeaders("", {
      headers: {
        Authorization: token.authToken,
      },
    });
    if (data.status == 401) {
      return { success: true, message: "Logged out successfully" };
    }
    return data;
  } catch (error: any) {
    return (
      error.response.data || { success: false, message: "Error logging out" }
    );
  }
};
