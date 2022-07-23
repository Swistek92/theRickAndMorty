import { configureStore } from '@reduxjs/toolkit';

import searchSlice from './search-slice';
import selectSlice from './select-slice';

const store = configureStore({
  reducer: { search: searchSlice.reducer, select: selectSlice.reducer },
});

export default store;
