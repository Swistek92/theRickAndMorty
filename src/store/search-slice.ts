import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { search: '', species: [''], origin: [''] },
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload;
    },
    toggleSpecies(state, action) {
      if (!state.species.includes(action.payload)) {
        state.species.push(action.payload);
      } else {
        state.species = state.species.filter((e) => e !== action.payload);
      }
    },
    toggleOrigin(state, action) {
      if (!state.origin.includes(action.payload)) {
        state.origin.push(action.payload);
      } else {
        state.origin = state.origin.filter((e) => e !== action.payload);
      }
    },
  },
});

export const searchAction = searchSlice.actions;

export default searchSlice;
