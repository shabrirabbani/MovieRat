import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

const fetchTrendingMovies = createAsyncThunk(
    'movies/fetchTrendingMovies',
    async (page, thunkAPI) => {
        try {
            const response = await axiosInstance.get('/trending/movie/day', {
                params: {
                    page: page
                }
            })
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

const trendingSlice = createSlice({
    name: 'trendingMovies',
    initialState: {
        movies: [],
        status: 'idle',
        totalPages:1,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTrendingMovies.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
            state.status = 'succeess'
            state.movies = action.payload.results
        })
        .addCase(fetchTrendingMovies.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload || action.error.message
        })
    }
})

export default trendingSlice.reducer
export {fetchTrendingMovies}