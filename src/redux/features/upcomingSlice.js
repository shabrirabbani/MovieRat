import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

const fetchUpcomingMovies =  createAsyncThunk(
    'movies/fetchUpcomingMovies',
    async (page, thunkAPI) => {
        try {
            const response = await axiosInstance.get('/movie/upcoming', {
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

const upcomingSlice = createSlice({
    name: 'upcomingMovies',
    initialState: {
        movies: [],
        status: 'idle',
        totalPages: 1,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUpcomingMovies.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
            state.status = 'succeess'
            state.movies = action.payload.results
            state.totalPages = action.payload.total_pages
        })
        .addCase(fetchUpcomingMovies.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload || action.error.message
        })
    }
})

export {fetchUpcomingMovies}
export default upcomingSlice.reducer