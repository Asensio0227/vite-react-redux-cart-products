import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state, action) => {
      state.cartItems = [];
    },
    increaseCart: (state, action) => {
      const itemId = action.payload;
      const product = state.cartItems.find((cart) => cart.id === itemId);

      product.amount = product.amount + 1;
    },
    decreaseCart: (state, action) => {
      const itemId = action.payload;
      const product = state.cartItems.find((cart) => cart.id === itemId);

      product.amount = product.amount - 1;
    },
    removeCart: (state, action) => {
      const itemId = action.payload;
     state.cartItems = state.cartItems.filter((cart) => cart.id !== itemId);
    },
    calculateCartTotal: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    }
  }
})

export const { clearCart,increaseCart,decreaseCart,removeCart ,calculateCartTotal } = cartSlice.actions;

export default cartSlice.reducer;