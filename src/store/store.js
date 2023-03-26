import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice"
import productReducer from "./productSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    authentication: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
