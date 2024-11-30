import BillingCard from "@/components/BillingCard/BillingCard";
import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWithHeaders } from "@/fetcher/fetchWrapper";
import { getApiTokenHeader } from "@/lib/utils";
import { getStateListActions } from "@/serverActions/commonActions";
import { getToken } from "@/serverActions/cookies";

export default async function Billingcard() {
  const stateList = await getStateListActions();
  const token = await getToken();
  const response = await fetchDataWithHeaders(allApiRoutes.profile.PROFILE, {
    headers: getApiTokenHeader(token?.authToken),
  });
  return (
    <BillingCard
      profileData={response?.data?.data}
      stateList={stateList.data}
    />
  );
}
