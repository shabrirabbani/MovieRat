import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

const  fetchTopRatedMovies = createAsyncThunk(
    'movies/fetchTopRatedMovies',
    async (page, thunkAPI) => {
        try {
            const response = await axiosInstance.get('/movie/top_rated', {
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

const topRatedSlice = createSlice({
    name: 'topRatedMovies',
    initialState: {
        movies: [],
        status: 'idle',
        totalPages: 1,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTopRatedMovies.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
            state.status = 'succeess'
            state.movies = action.payload.results
            state.totalPages = action.payload.total_pages
        })
        .addCase(fetchTopRatedMovies.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload || action.error.message
        })
    }
})

export {fetchTopRatedMovies}
export default topRatedSlice.reducer