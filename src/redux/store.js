import {configureStore} from "@reduxjs/toolkit";
import listItemSlice from "./feature/getListItem";

const store = configureStore({
    reducer: {
        listItem: listItemSlice.reducer
    }
});

export default store;