import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../api/axiosInstance"


export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (page, thunkAPI) => {
        try{
            const response = await axiosInstance.get('/movie/now_playing', {
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

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        status: 'idle',
        error: null,
        totalPages: 1,
        currentPage: 1
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.movies = action.payload.results
                state.totalPages = action.payload.total_pages
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload || action.error.message
            })
        }
})

export const { setCurrentPage } = movieSlice.actions
export default movieSlice.reducer