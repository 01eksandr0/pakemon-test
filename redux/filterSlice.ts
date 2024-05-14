import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    changeFilter: {
      reducer(state, action) {
        return action.payload;
      },
      prepare(query: string) {
        return { payload: query };
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
