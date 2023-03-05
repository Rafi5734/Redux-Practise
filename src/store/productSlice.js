import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  SUCCESS: "success",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.LOADING,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions; //what is the meaning of actions??

export default productSlice.reducer; //what is the meaning of reducer???

// export const fetchProduct = createAsyncThunk("product/fetch", async () => {
//   const result = await fetch("./fake_data.json");
//     const data = await result.json();
//     return data;
// })

export function fetchProduct() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const result = await fetch("./fake_data.json");
      const data = await result.json();
      // console.log(data);
      dispatch(setProducts(data));
      dispatch(setStatus(STATUS.SUCCESS));

      // console.log(data);
    } catch (e) {
      console.log(e);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}
