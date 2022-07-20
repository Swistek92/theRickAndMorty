import { configureStore } from '@reduxjs/toolkit';

import searchSlice from './search-slice';
// import cartSlice from './cart-slice';

const store = configureStore({
  reducer: { search: searchSlice.reducer },
});

export default store;
