import { configureStore } from "@reduxjs/toolkit";

const taskManagerReducer = (state = { tasks: [] }, action) => {
  return state;
};

export const store = configureStore({
  reducer: {
    taskManager: taskManagerReducer,
  },
});
