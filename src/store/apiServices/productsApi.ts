import allApiRoutes from "@/constants/allApiRoutes";
import { rootApiSlice } from "../rootApi";

const productsApi = rootApiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page = 1, items_per_page = 10, search = "", brand }) => {
        const params = new URLSearchParams();
        params.append("page", page.toString());
        params.append("items_per_page", items_per_page.toString());
        if (search) params.append("search", search);
        return params.toString() && brand
          ? {
              url: `${allApiRoutes.products.PRODUCTS}/brands/${brand}`,
              method: "GET",
              params,
            }
          : params.toString()
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
    getProductDetails: builder.query({
      query: ({ id }) => ({
        url: `${allApiRoutes.products.PRODUCTS}/${id}`,
        method: "GET",
      }),
    }),
    favoriteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `${allApiRoutes.products.FAVORITE_PRODUCT}/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["product-list"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useFavoriteProductMutation,
} = productsApi;
