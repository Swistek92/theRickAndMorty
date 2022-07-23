import { createSlice } from '@reduxjs/toolkit';

const selectSlice = createSlice({
  name: 'select',
  initialState: { select: Array(), status: '' },
  reducers: {
    addSelect(state, action) {
      const newCharacter = action.payload;
      state.select.push(newCharacter);
    },
    removeSelect(state, action) {
      const character = action.payload;
      state.select = state.select.filter((char) => char !== character);
    },
    clearSelect(state) {
      state.select = Array();
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const selectActions = selectSlice.actions;

export default selectSlice;
