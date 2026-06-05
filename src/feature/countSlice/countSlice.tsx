import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "count",
  initialState, // Using the colon shorthand here
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit uses Immer, so you can safely "mutate" object properties
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;