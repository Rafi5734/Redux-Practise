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
    loginData: "",
  },
  reducers: {
    login(state, action) {
          localStorage.setItem("login", JSON.stringify(action.payload));
          const getLoginData = localStorage.getItem("login");
          if (getLoginData) {
            state.authentication = true;
          }
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setLoginData(state, action) {
      
    },
  },
});
export const { login, setStatus, setLoginData } = authSlice.actions; //what is the meaning of actions??

export default authSlice.reducer;

// export function loginInfo() {
//   return async function loginInfo(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const getLoginData = localStorage.getItem("login");
//       dispatch(setLoginData(getLoginData));
//       dispatch(setStatus(STATUS.SUCCESS));
//       // console.log(data);
//     } catch (e) {
//       console.log(e);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }
