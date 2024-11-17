import allApiRoutes from "@/constants/allApiRoutes";
import { rootApiSlice } from "../rootApi";

const productsApi = rootApiSlice.injectEndpoints({
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
    addToFavorite: builder.mutation({
      query: ({ id }) => ({
        url: `${allApiRoutes.products.FAVORITE_PRODUCT}/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["product-list", "favorite-product"],
    }),
    removeFromFavorite: builder.mutation({
      query: ({ id }) => ({
        url: `${allApiRoutes.products.FAVORITE_PRODUCT}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product-list", "favorite-product"],
    }),
    favoriteProductsList: builder.query({
      query: ({ page = 1, items_per_page = 10 }) => ({
        url: `${allApiRoutes.products.FAVORITE_PRODUCT}`,
        method: "GET",
        // params: {
        //   page,
        //   items_per_page,
        // },
      }),
      providesTags: ["favorite-product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useFavoriteProductMutation,
  useAddToFavoriteMutation,
  useRemoveFromFavoriteMutation,
  useFavoriteProductsListQuery,
} = productsApi;
