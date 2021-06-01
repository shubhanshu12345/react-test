import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 100000
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      if (state.value > 0) state.value -= action.payload;
    },
    donate: (state) => {
      state.value = 0;
    }
  }
});

export const { incrementByAmount, decrementByAmount, donate } = slice.actions;

export const selectCount = (state) => state.counter.value;

export default slice.reducer;
