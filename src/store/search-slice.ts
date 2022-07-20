import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: { search: '' },
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const searchAction = searchSlice.actions;

export default searchSlice;
