import { combineReducers, createSlice } from "@reduxjs/toolkit";
import productSlice, { cartSlice, wishSlice } from "./store/productStore";

export const rootReducer = combineReducers({
  productSlice: productSlice.reducer,
  cartSlice: cartSlice.reducer,
  wishSlice: wishSlice.reducer,
});
