import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { menuVisibility: false },
  reducers: {
    toggle(state) {
      state.menuVisibility = !state.menuVisibility;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
