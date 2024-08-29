import { createSelector, createSlice } from "@reduxjs/toolkit";

const trucksSlice = createSlice({
    name: "trucks",
    initialState: {
        items: [],
        loading: false,
        error: null,
        nameFilter: ""
    },
    extraReducers: builder =>
        builder
            .addCase
})