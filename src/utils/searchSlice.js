import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
    movieResults: [],
    movieNames: [],
  },
  reducers: {
    toggleSearchView: (state) => {
      state.showSearch = !state.showSearch;
    },
    addMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleSearchView, addMovieResult } = searchSlice.actions;

export default searchSlice.reducer;
