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
    },
    remove(state, action) {
      return state.filter((item) => item.name !== action.payload);
    },
  },
});


export const { add, remove } = cartSlice.actions;       //what is the meaning of actions??

export default cartSlice.reducer;                       //what is the meaning of reducer???
