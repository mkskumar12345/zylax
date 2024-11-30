import allApiRoutes from "@/constants/allApiRoutes";
import { rootApiSlice } from "../rootApi";

const blogsApi = rootApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlogList: builder.query<any, any>({
      query: () => {
        return {
          url: allApiRoutes.blogs.BLOG_LIST,
          method: "GET",
        };
      },
      providesTags: ["blogs-list"],
    }),
  }),
});

export const { useGetBlogListQuery } = blogsApi;
