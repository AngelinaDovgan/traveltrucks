import { createSlice } from "@reduxjs/toolkit";
import { fetchTruckFeatures } from "./trucksOps";

const truckFeaturesSlice = createSlice({
    name: "truckFeatures",
    initialState,
    reducers: {},
    extraReducers: builder => 
        builder
            .addCase(fetchTruckFeatures.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
    
})