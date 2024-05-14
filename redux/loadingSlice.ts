import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    trueLoading: (state) => true,
    falseLoading: (state) => false,
  },
});

export const { trueLoading, falseLoading } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
