import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
