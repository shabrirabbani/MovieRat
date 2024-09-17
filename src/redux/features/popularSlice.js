import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async (page, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/movie/popular", {
        params: {
          page: page,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const popularSlice = createSlice({
    name: "popularMovies",
    initialState: {
        movies: [],
        status: "idle",
        totalPages: 1,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPopularMovies.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchPopularMovies.fulfilled, (state, action) => {
            state.status = "succeess";
            state.movies = action.payload.results;
            state.totalPages = action.payload.total_pages;
        })
        .addCase(fetchPopularMovies.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload || action.error.message;
        });
    },
});

export {popularSlice}
export default popularSlice.reducer;
