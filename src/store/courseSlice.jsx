import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: { courseDetails: [], isLoading: false },
  reducers: {
    addCourses(state, { payload }) {
      state.courseDetails = payload;
    },
    setIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const courseActions = courseSlice.actions;

export default courseSlice.reducer;
