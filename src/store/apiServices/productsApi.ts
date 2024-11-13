import allApiRoutes from "@/constants/allApiRoutes";
import { rootApiSlice } from "../rootApi";

const productsApi = rootApiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page = 1, items_per_page = 10, search = "" }) => {
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("items_per_page", items_per_page.toString());
        if (search) params.append("search", search);
        return params.toString()
          ? {
              url: allApiRoutes.products.PRODUCTS,
              method: "GET",
              params,
            }
          : {
              url: allApiRoutes.products.PRODUCTS,
              method: "GET",
            };
      },
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
