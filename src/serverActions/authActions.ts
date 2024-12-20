import allApiRoutes from "@/constants/allApiRoutes";
import { postDataWrapper, updateDataWrapper } from "@/fetcher/fetchWrapper";
import { getToken, setToken } from "./cookies";
import toast from "react-hot-toast";
import { getApiTokenHeader } from "@/lib/utils";

// Login
export const loginAction = async (payload: any) => {
  const response = await postDataWrapper(allApiRoutes.login.LOGIN, payload);
  console.log(response.data?.data?.token);
  setToken(response.data?.data?.token);
  if (response?.data?.success) {
    toast.success(response.data.message);
  } else {
    toast.error(response.data.message);
  }
  return response;
};

export const registerAction = async (payload: any) => {
  const response = await postDataWrapper(
    allApiRoutes.register.REGISTER,
    payload
  );
  if (response?.data?.success) {
    toast.success("Registration Successful, Please login to continue.");
  } else {
    toast.error(response.data.error);
  }
  return response;
};
export const updateProfileAction = async (payload: any) => {
  const token = await getToken();
  const response = await updateDataWrapper(
    allApiRoutes.profile.PROFILE,
    payload,
    { headers: getApiTokenHeader(token?.authToken) }
  );
  if (response?.data?.success) {
    toast.success(response.data.message);
  } else {
    toast.error(response.data.message);
  }
  return response;
};
