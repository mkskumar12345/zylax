// redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for cart items and the entire cart state
interface CartItem {
  id: string; // Assuming id is a string, you can change it to number if needed
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

// Utility function to load cart from localStorage
const loadCartFromLocalStorage = (): CartState => {
  try {
    const cartData = localStorage.getItem("cart");
    return cartData
      ? JSON.parse(cartData)
      : { items: [], totalQuantity: 0, totalPrice: 0 };
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
    return { items: [], totalQuantity: 0, totalPrice: 0 };
  }
};

// Utility function to save cart to localStorage
const saveCartToLocalStorage = (cart: CartState): void => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

// Initial state, load from localStorage if available
const initialState: CartState = loadCartFromLocalStorage();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.price;

      saveCartToLocalStorage(state); // Save updated cart to localStorage
    },

    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;

        state.items = state.items.filter((item) => item.id !== itemId);
      }

      saveCartToLocalStorage(state); // Save updated cart to localStorage
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      saveCartToLocalStorage(state); // Save cleared cart to localStorage
    },

    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        const priceDifference =
          (quantity - existingItem.quantity) * existingItem.price;
        existingItem.quantity = quantity;
        existingItem.totalPrice = quantity * existingItem.price;

        state.totalQuantity += quantity - existingItem.quantity;
        state.totalPrice += priceDifference;
      }

      saveCartToLocalStorage(state); // Save updated cart to localStorage
    },

    setCartFromAPI: (state, action: PayloadAction<CartState>) => {
      const { items, totalQuantity, totalPrice } = action.payload;
      state.items = items;
      state.totalQuantity = totalQuantity;
      state.totalPrice = totalPrice;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  updateItemQuantity,
  setCartFromAPI,
} = cartSlice.actions;

export default cartSlice.reducer;
