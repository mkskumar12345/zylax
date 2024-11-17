// hooks/useCart.ts
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getToken } from "@/serverActions/cookies"; // Assuming this function returns the token
import { setCartFromAPI } from "@/store/slices/cartSlice";

interface CartItem {
  id: string; // Assuming id is a string, you can change it to number if needed
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

// Type for the cart state
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: { cart: CartState }) => state.cart); // Get cart state from Redux

  useEffect(() => {
    const token = getToken(); // Check if the user is logged in

    if (!token) {
      // Fetch cart from API if logged in
      fetch("/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          // Dispatch action to set cart from API response
          dispatch(setCartFromAPI(data));
        })
        .catch((error) => {
          console.error("Error fetching cart from API:", error);
        });
    } else {
      // If not logged in, cart is persisted in Redux (localStorage handled automatically)
    }
  }, [dispatch]);

  return cart; // Return cart data to the component
};

export default useCart;
