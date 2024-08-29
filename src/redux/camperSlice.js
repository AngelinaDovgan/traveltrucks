import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCampersId } from "./camperOps";

const campersSlice = createSlice({
    name: "campers",
    initialState: {
        items: [],
        loading: false,
        error: null,
        nameFilter: ""
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchCampers.pending, state => {
                state.loading = true;
            })
            .addCase(fetchCampers.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload.items;
            })
            .addCase(fetchCampers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchCampersId.pending, state => {
                state.loading = true;
            })
            .addCase(fetchCampersId.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const index = state.items.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                } else {
                    state.items.push(action.payload);
                }
            })
            .addCase(fetchCampersId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }),
});

export const selectCampers = state => state.campers.items;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;
export const selectNameFilter = state => state.campers.nameFilter;

export default campersSlice.reducer;