import allApiRoutes from "@/constants/allApiRoutes";
import { rootApiSlice } from "../rootApi";
import { addItemToCart, CartItem } from "../slices/cartSlice";

export const cartApi = rootApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query<CartItem[], void>({
      query: () => ({
        url: allApiRoutes.cart.GET_ALL_CART_ITEMS,
        method: "GET",
      }),
      transformResponse: (response: { cartItems: any }) =>
        response.cartItems?.map((item: any) => ({ ...item, ...item?.product })),
      providesTags: ["cart"],
    }),
    addItemToCart: builder.mutation<void, CartItem>({
      query: (body) => ({
        url: allApiRoutes.cart.ADD_TO_CART,
        method: "POST",
        body,
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const { useGetCartQuery } = cartApi;
