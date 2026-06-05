import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount += newItem.price;
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (!item) return;
      state.totalQuantity -= item.quantity;
      state.totalAmount -= item.price * item.quantity;
      state.items = state.items.filter((i) => i.id !== id);
    },

    increaseQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;
      item.quantity += 1;
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },

    decreaseQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (!item) return;
      if (item.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== action.payload);
      } else {
        item.quantity -= 1;
      }
      state.totalQuantity -= 1;
      state.totalAmount -= item.price;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart, removeFromCart,
  increaseQty, decreaseQty, clearCart
} = cartSlice.actions;

export default cartSlice.reducer;