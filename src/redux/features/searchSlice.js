import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

// Async thunk to fetch movie search results
export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query) => {
    const response = await axiosInstance.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}`
    );
    return response.data.results;
  }
);

// Async thunk to fetch TV show search results
export const fetchTvShowResults = createAsyncThunk(
  "search/fetchTvShowResults",
  async (query) => {
    const response = await axiosInstance.get(
      `https://api.themoviedb.org/3/search/tv?query=${query}`
    );
    return response.data.results;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    movieResults: [],
    tvShowResults: [],
    searchType: "movie", 
    status: "idle",
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setSearchType(state, action) {
      state.searchType = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movieResults = action.payload; // Set results to movie API response
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTvShowResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTvShowResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tvShowResults = action.payload; // Set results to tv show API response
      })
      .addCase(fetchTvShowResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {setQuery, setSearchType} = searchSlice.actions;
export default searchSlice.reducer;

