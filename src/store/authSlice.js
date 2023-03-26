import { createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  SUCCESS: "success",
  LOADING: "loading",
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authentication: false,
    status: STATUS.LOADING,
    searchQuery: "",
  },
  reducers: {
    login(state, action) {
      localStorage.setItem("login", JSON.stringify(action.payload));
      state.authentication = true;
      console.log(action.payload);
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { login } = authSlice.actions; //what is the meaning of actions??

export default authSlice.reducer;
