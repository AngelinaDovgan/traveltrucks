import { configureStore } from "@reduxjs/toolkit";
import camperSlice from "./camperSlice";


export const store = configureStore({
    reducer: {
        campers: camperSlice,
    },
});