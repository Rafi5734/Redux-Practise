import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      //pure function???
      // return [...state, action.payload]
      state.push(action.payload);
      // console.log("action----", action);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    totalCartItemPrice(state, action) {
      const { id } = action.payload;
      console.log("action----", action);
      // return state.filter((item) => item.id === action.payload);
    },
  },
});


export const { add, remove, totalCartItemPrice } = cartSlice.actions;       //what is the meaning of actions??

export default cartSlice.reducer;                       //what is the meaning of reducer???
