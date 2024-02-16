import { configureStore } from "@reduxjs/toolkit";
import adSlice from "./slices/adSlice";

export const store = configureStore({
    reducer: {
        advertisement: adSlice,
    }, 
})