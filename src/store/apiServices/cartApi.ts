import allApiRoutes from "@/constants/allApiRoutes";
import { rootApiSlice } from "../rootApi";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const cartApi = rootApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query<CartItem[], void>({
      query: () => ({
        url: allApiRoutes.cart.GET_ALL_CART_ITEMS,
        method: "GET",
      }),
      transformResponse: (response: { data: CartItem[] }) => response.data,
      providesTags: ["cart"],
    }),
  }),
});

export const { useGetCartQuery } = cartApi;
