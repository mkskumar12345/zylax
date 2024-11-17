import allApiRoutes from "@/constants/allApiRoutes";
import { postDataWrapper } from "@/fetcher/fetchWrapper";
import toast from "react-hot-toast";

export const contactActions = async (payload: any) => {
  const response = await postDataWrapper(allApiRoutes.contact.CONTACT, payload);
  console.log({ payload });
  if (response?.data?.success) {
    toast.success(response.data.message);
  } else {
    toast.error(response.data.error);
  }
  return response;
};
