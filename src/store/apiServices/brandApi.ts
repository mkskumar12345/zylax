import allApiRoutes from "@/constants/allApiRoutes";
import { rootApiSlice } from "../rootApi";

const brandsApi = rootApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrandsList: builder.query({
      query: (arg) => ({
        url: allApiRoutes.brands.BRAND_LIST,
        method: "GET",
      }),
      providesTags: ["brands-list"],
    }),
    // createProduct: builder.mutation({
    //   query: (body) => ({
    //     url: allApiRoutes.products.PRODUCTS,
    //     method: "POST",
    //     body,
    //   }),
    // }),
  }),
});

export const { useGetBrandsListQuery } = brandsApi;
