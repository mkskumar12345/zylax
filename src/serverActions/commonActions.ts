import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWithHeaders, fetchDataWrapper } from "@/fetcher/fetchWrapper";

export const getStateListActions = async () => {
  const response = await fetchDataWrapper(allApiRoutes.stateList.STATE_LIST);
  return response;
};
