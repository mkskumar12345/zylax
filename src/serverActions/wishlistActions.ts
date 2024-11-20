import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWithHeaders, postDataWrapper } from "@/fetcher/fetchWrapper";
import toast from "react-hot-toast";
import { getToken } from "./cookies";

export const getFavoriteProductsActions = async () => {
  const token = await getToken();
  const response = await fetchDataWithHeaders(
    allApiRoutes.products.FAVORITE_PRODUCT,
    {
      headers: {
        "x-access-token": token?.authToken,
      },
      next: { tags: ["favorite-product"] },
    }
  );
  if (response?.data?.success) {
    // toast.success(response.data.message);
  } else {
    // toast.error(response.data.error);
  }
  return response;
};
