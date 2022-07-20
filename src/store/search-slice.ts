import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { search: '', species: 'none', orgin: 'none', status: 'none' },
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload;
    },
    changeSpecies(state, action) {
      state.species = action.payload;
    },
    changeOrgin(state, action) {
      state.orgin = action.payload;
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const searchAction = searchSlice.actions;

export default searchSlice;
