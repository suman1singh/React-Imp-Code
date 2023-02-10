import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    tasks: ["make video", "upload"],
  },
  reducers: {
    //   increment: (state) => {
    //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //     // doesn't actually mutate the state because it uses the Immer library,
    //     // which detects changes to a "draft state" and produces a brand new
    //     // immutable state based off those changes
    //     state.value += 1
    //   },
    //   decrement: (state) => {
    //     state.value -= 1
    //   },
    saveTaskToRedux: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const { saveTaskToRedux } = counterSlice.actions;

export default counterSlice.reducer;
