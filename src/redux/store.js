import { configureStore } from "@reduxjs/toolkit";
import trucksReducer from './trucksSlice';


export const store = configureStore({
    reducer: {
        trucks: trucksReducer,
    },
});