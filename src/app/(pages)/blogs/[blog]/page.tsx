import SingleBlog from "@/app/_components/Blog/SingleBlog";
import allApiRoutes from "@/constants/allApiRoutes";
import { fetchDataWithHeaders } from "@/fetcher/fetchWrapper";
import { getApiTokenHeader } from "@/lib/utils";
import { getToken } from "@/serverActions/cookies";
import React from "react";

const page = async ({ params }: { params: { blog: string } }) => {
  const token = await getToken();
  const response = await fetchDataWithHeaders(
    `${allApiRoutes.blogs.BLOG_DETAILS}/${params?.blog}`,
    {
      headers: getApiTokenHeader(token?.authToken),
    }
  );

  return <SingleBlog blogData={response?.data?.data} />;
};

export default page;
