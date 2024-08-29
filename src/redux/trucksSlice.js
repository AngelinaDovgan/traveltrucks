import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchTrucks, fetchTrucksId } from "./trucksOps";

const trucksSlice = createSlice({
    name: "trucks",
    initialState: {
        items: [],
        loadingTrucks: false,
        loadingTrucksById: false,
        error: null,
        nameFilter: ""
    },
    extraReducers: builder =>
        builder
            .addCase(fetchTrucks.pending, state => {
                state.loadingTrucks = true;
            })
            .addCase(fetchTrucks.fulfilled, (state, action) => {
                state.loadingTrucks = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchTrucks.rejected, (state, action) => {
                state.loadingTrucks = false;
                state.error = action.payload;
            })
            .addCase(fetchTrucksId.pending, state => {
                state.loadingTrucksById = true;
            })
            .addCase(fetchTrucksId.fulfilled, (state, action) => {
                state.loadingTrucksById = false;
                state.error = null;
                const index = state.items.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                } else {
                    state.items.push(action.payload);
                }
            })
            .addCase(fetchTrucksId.rejected, (state, action) => {
                state.loadingTrucksById = false;
                state.error = action.payload;
            }),
});

export const selectTrucks = state => state.trucks.items;
export const selectLoading = state => state.trucks.loading;
export const selectError = state => state.trucks.error;
export const selectNameFilter = state => state.trucks.nameFilter;

export default trucksSlice.reducer;