import { createSlice } from "@reduxjs/toolkit";

const menuBarSlice = createSlice({
  name: "menubar",
  initialState: { menuVisibility: false },
  reducers: {
    toggle(state) {
      state.menuVisibility = !state.menuVisibility;
    },
  },
});

export const menuBarActions = menuBarSlice.actions;

export default menuBarSlice.reducer;
