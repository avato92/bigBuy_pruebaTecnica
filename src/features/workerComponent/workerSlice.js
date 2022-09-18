/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  workers: [],
};

export const workerSlice = createSlice({
  name: 'worker',
  initialState,
  reducers: {
    saveWorkers: (state, action) => {
      state.workers = action.payload;
    },
    deleteWorker: (state, action) => {
      const remainingWorkers = state.workers.filter((worker) => worker.id !== action.payload);
      state.workers = remainingWorkers;
    },
    createWorker: (state, action) => {
      const {
        id, name, email, salary, age,
      } = action.payload;
      state.workers.push({
        id: Number(id), name, email, salary: Number(salary), age: Number(age),
      });
    },
    updateWorker: (state, action) => {
      const workersUpdated = state.workers.map((worker) => {
        if (worker.id === action.payload.id) {
          worker = action.payload;
          worker.age = Number(action.payload.age);
        }
        return worker;
      });
      state.workers = workersUpdated;
    },
  },
});

export const {
  saveWorkers, deleteWorker, createWorker, updateWorker,
} = workerSlice.actions;

export const selectWorkers = (state) => state.worker.workers;

export default workerSlice.reducer;
