import { configureStore } from '@reduxjs/toolkit';
import tagListReducer from './tagListSlice';

export default configureStore({
  reducer: {
    tagList: tagListReducer,
  },
});