import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "@/serverActions/cookies";
// import { setCart } from "@/store/slices/cartSlice";
import { useGetCartQuery } from "@/store/apiServices/cartApi";
import { addItemToCart, selectCartItems } from "@/store/slices/cartSlice";
import { RootState } from "@/store/store";

const useFetchCart = async () => {
  const dispatch = useDispatch();
  const token = await getToken();
  const cartItems = useSelector((state: RootState) => selectCartItems(state));

  // Fetch the cart only if the user is logged in
  const { data: cartData, error } = useGetCartQuery(undefined, {
    skip: !token?.authToken,
  });

  useEffect(() => {
    if (cartData) {
      cartData?.forEach((item) => dispatch(addItemToCart(item)));
    }
  }, [cartData, dispatch]);
};

export default useFetchCart;
