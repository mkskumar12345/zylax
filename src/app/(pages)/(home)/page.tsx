import Image from "next/image";
import HomeComponent from "@/app/_components/Home/Home";
import { fetchDataWithHeaders, fetchDataWrapper } from "@/fetcher/fetchWrapper";
import allApiRoutes from "@/constants/allApiRoutes";
export default async function Home() {
  const response = await fetchDataWrapper(allApiRoutes.HOME_PAGE);
  console.log(response);
  return <HomeComponent homePageDate={response?.data?.data} />;
}
