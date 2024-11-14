import { toast } from "@/components/ui/use-toast";
import allApiRoutes from "@/constants/allApiRoutes";
import { postDataWrapper } from "@/fetcher/fetchWrapper";
import { setToken } from "./cookies";

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
