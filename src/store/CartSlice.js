import { createSlice } from "@reduxjs/toolkit";
import { Alert, Space } from "antd";

const initialState = [];
var globalState = {
  quantity: 1,
};

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
      console.log("state----", state);
      return state.filter((item) => item.id !== action.payload);
    },
    quantityIncrement(state, action) {
      const item = state.find((p) => p.id === action.payload);
      console.log(item);
      if (item) {
        item.quantity += 1;
      }
      console.log("state----", action);
    },
    quantityDecrement(state, action) {
      const item = state.find((p) => p.id === action.payload);
      console.log(item);
      if (item) {
        item.quantity -= 1;
      }
      console.log("state----", action);
    },
    placeOrder(state, action) {
      // const {data} = action.payload;
      
      console.log("action----", action.payload);
      console.log("state----", state);
    },
  },
});

export const { add, remove, quantityIncrement, quantityDecrement, placeOrder } =
  cartSlice.actions; //what is the meaning of actions??

export default cartSlice.reducer; //what is the meaning of reducer???
