import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to cart or increase quantity
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      console.log(JSON.parse(JSON.stringify(action.payload)));
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        // If quantity becomes zero or less, remove the item from the cart
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== existingItem.id
          );
        }
      } else {
        // Only add the item if quantity is greater than zero
        if (action.payload.quantity > 0) {
          state.items.push(action.payload);
        }
      }

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // Decrease item quantity or remove from cart
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity -= 1; // Decrease quantity by 1
        // If quantity becomes zero or less, remove the item from the cart
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // Directly remove an item from the cart
    removeItemCompletely: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // Set the cart with new items (e.g., from localStorage)
    setCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

// Export actions
export const {
  addItemToCart,
  removeItemFromCart,
  removeItemCompletely,
  clearCart,
  setCart,
} = cartSlice.actions;

// Selector to get cart items
export const selectCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
