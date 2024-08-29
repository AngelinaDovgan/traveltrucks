import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const fetchTrucks = createAsyncThunk(
    "trucks/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchTrucksId = createAsyncThunk(
    "trucks/fetchId",
    async ({id}, thunkAPI) => {
        try {
            const response = await axios.get(`/campers/${id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const fetchTruckFeatures = createAsyncThunk(
    "trucks/fetchFeatures",
    async ({ id }, thunkAPI) => {
        try {
            const response = await axios.get(`/campers/${id}/items`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);