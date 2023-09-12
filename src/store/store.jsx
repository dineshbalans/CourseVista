import { configureStore} from "@reduxjs/toolkit";

import menuBarSliceReducer from "./menuBarSlice";
import courseSliceReducer from "./courseSlice";

const store = configureStore({
    reducer : { ui : menuBarSliceReducer, course : courseSliceReducer}
})

export default store;
