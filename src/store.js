import { configureStore } from '@reduxjs/toolkit'
import nameSlice from './Component/nameSlice';

export default configureStore({
  reducer: {
      nameSlice: nameSlice,
  }
});