import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/movie/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const detailSlice = createSlice({
  name: "details",
  initialState: {
    movie: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.status = "success";
        state.movie = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});


export default detailSlice.reducer;
