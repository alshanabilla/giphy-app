import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './query-slice';

export default configureStore({
  reducer: {
    query: queryReducer,
  }
});