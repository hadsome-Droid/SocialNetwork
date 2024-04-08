import {configureStore} from "@reduxjs/toolkit";
import {newsFeedReducer} from "../features/newsFeed/components/newsFeedSlice";


export const store = configureStore({
    reducer: {
        newsFeed: newsFeedReducer
    },
});

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch