import { createSlice } from "@reduxjs/toolkit";

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
    searchQuery: "",
    addNewProduct: [],
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    addProduct(state, action) {
      // state.data = action.payload;
      // state.data = action.payload;
      state.addNewProduct.push(action.payload);
      console.log(action.payload);
    },
    toggleSortOrder(state, action) {
      if (action.payload === "ascending") {
        state.data.sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        state.data.sort((a, b) => {
          return b.price - a.price;
        });
      }
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus, toggleSortOrder, addProduct } =
  productSlice.actions; //what is the meaning of actions??

export default productSlice.reducer; //what is the meaning of reducer???

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
// export function newProduct() {
//   return async function newProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       dispatch(addProduct());

//       // console.log(data);
//     } catch (e) {
//       console.log(e);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }


