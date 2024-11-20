"use server";

import { fetchDataWithHeaders } from "@/fetcher/fetchWrapper";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const clearCookies = () => {
  cookies().delete("token");
};

export const getToken = async () => {
  try {
    const token = cookies().get("token");
    // const parsedToken = token ? JSON.parse(token.value) : null;
    return { authToken: token?.value };
  } catch (error) {
    return { success: false, message: "No token found" };
  }
};

export const setToken = async (token: string) => {
  try {
    cookies().set("token", token, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    return { success: true, message: "Token set successfully" };
  } catch (error) {
    return { success: false, message: "Error setting token" };
  }
};

export const logOutHandler = async () => {
  try {
    const token = await getToken();
    const { data } = await fetchDataWithHeaders("", {
      Authorization: token?.authToken || "",
    });
    if (data.status === 401) {
      clearCookies();
      return { success: true, message: "Logged out successfully" };
    }
    return data;
  } catch (error) {
    return { success: false, message: "Error logging out" };
  }
};

export const revalidateTagInCache = (tag: string) => {
  revalidateTag(tag);
};
