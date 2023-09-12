import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name:"courses",
    initialState : {courseDetails: []},
    reducers:{
        addCourses(state,{payload}){
            state.courseDetails = payload;
        }
    }
})

export const courseActions = courseSlice.actions;

export default courseSlice.reducer;