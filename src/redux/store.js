import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movieSlice";
import trendingReducer from "./features/trendingSlice"
import popularReducer from "./features/popularSlice"
import topRatedReducer from "./features/topRatedSlice"
import upcomingReducer from "./features/upcomingSlice"
import detailReducer from "./features/detailSlice"
import creditsReducer from "./features/creditSlice"
import searchReducer from "./features/searchSlice"

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        trendingMovies: trendingReducer,
        popularMovies: popularReducer,
        topRatedMovies: topRatedReducer,
        upcomingMovies: upcomingReducer,
        detailMovies: detailReducer,
        creditMovies: creditsReducer,
        searchMovies: searchReducer,
    }
})

export default store