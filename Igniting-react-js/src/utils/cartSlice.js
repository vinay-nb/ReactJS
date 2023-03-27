import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["banana", "apple"],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      /** action is coming from click of add to cart button, function doesn't return anything, 
      all logic goes inside reducer function. */
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// exporting actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// exportng reducer
export default cartSlice.reducer;
