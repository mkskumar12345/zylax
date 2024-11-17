import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getToken } from "@/serverActions/cookies";
import { setCart } from "@/store/slices/cartSlice";
import { useGetCartQuery } from "@/store/apiServices/cartApi";

const useFetchCart = async () => {
  const dispatch = useDispatch();
  const token = await getToken();

  // Fetch the cart only if the user is logged in
  const { data: cartData, error } = useGetCartQuery(undefined, {
    skip: !token?.authToken,
  });

  useEffect(() => {
    if (cartData) {
      dispatch(setCart(cartData));
    }
  }, [cartData, dispatch]);
};

export default useFetchCart;
