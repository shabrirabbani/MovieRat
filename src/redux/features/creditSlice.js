import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

export const fetchMovieCredits = createAsyncThunk(
  "movies/fetchMovieCredits",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/movie/${id}/credits`);
      return response.data.cast;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const creditsSlice = createSlice({
  name: "credits",
  initialState: {
    cast: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieCredits.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovieCredits.fulfilled, (state, action) => {
        state.status = "success";
        state.cast = action.payload;
      })
      .addCase(fetchMovieCredits.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default creditsSlice.reducer;
