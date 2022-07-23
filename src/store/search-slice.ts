import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { search: '', species: 'off', origin: 'off' },
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload;
    },
    setSpecies(state, action) {
      state.species = action.payload;
    },
    setOrigin(state, action) {
      state.origin = action.payload;
    },
  },
});

export const searchAction = searchSlice.actions;

export default searchSlice;
