import allApiRoutes from "@/constants/allApiRoutes";
import { rootApiSlice } from "../rootApi";

const categoriesApi = rootApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategoriesList: builder.query<any, any>({
      query: () => {
        return {
          url: allApiRoutes.categories.CATEGORIES,
          method: "GET",
        };
      },
      providesTags: ["categories-list"],
    }),
  }),
});

export const { useGetCategoriesListQuery } = categoriesApi;
