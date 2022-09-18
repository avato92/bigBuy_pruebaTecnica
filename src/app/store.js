import { configureStore } from '@reduxjs/toolkit';
import workerReducer from '../features/workerComponent/workerSlice';

const store = configureStore({
  reducer: {
    worker: workerReducer,
  },
});

export default store;
