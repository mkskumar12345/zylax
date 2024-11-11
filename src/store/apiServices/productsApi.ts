import allApiRoutes from "@/constants/allApiRoutes";
import { rootApiSlice } from "../rootApi";

const productsApi = rootApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: allApiRoutes.products.PRODUCTS,
        method: "GET",
      }),
      providesTags: ["product-list"],
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: allApiRoutes.products.PRODUCTS,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useCreateProductMutation } = productsApi;
