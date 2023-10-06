import { combineReducers } from "@reduxjs/toolkit";

import themeSlice from "./theme";
import postSlice from "./postSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
    user: userSlice,
    theme: themeSlice,
    posts: postSlice,
});

export { rootReducer };