import { toast } from "@/components/ui/use-toast";
import allApiRoutes from "@/constants/allApiRoutes";
import { postDataWrapper, updateDataWrapper } from "@/fetcher/fetchWrapper";
import { getToken, setToken } from "./cookies";

// Login
export const loginAction = async (payload: any) => {
  const response = await postDataWrapper(allApiRoutes.login.LOGIN, payload);
  toast({
    title: "You registered successfully",
    description: "Please login to access your account",
  });
  console.log(response.data);
  setToken(response.data?.data?.token);
  return response;
};

export const registerAction = async (payload: any) => {
  const response = await postDataWrapper(
    allApiRoutes.register.REGISTER,
    payload
  );
  toast({
    title: "You registered successfully",
    description: "Please login to access your account",
  });
  return response;
};
export const updateProfileAction = async (payload: any) => {
  const token = await getToken();

  const response = await updateDataWrapper(
    allApiRoutes.profile.PROFILE,
    payload,
    { "x-access-token": token?.authToken || "" }
  );
  toast({
    title: "Profile Updated Successfully",
    description: "Profile Updated Successfully",
  });
  return response;
};
