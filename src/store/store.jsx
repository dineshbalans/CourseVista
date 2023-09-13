import { configureStore} from "@reduxjs/toolkit";

import uiSliceReducer from "./uiSlice";
import courseSliceReducer from "./courseSlice";

const store = configureStore({
    reducer : { ui : uiSliceReducer, course : courseSliceReducer}
})

export default store;
