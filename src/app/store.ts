import {configureStore} from "@reduxjs/toolkit";
import {newsFeedReducer} from "../features/newsFeed/model/newsFeedSlice";
import {profileReducer} from "../features/profile/model/profileSlice";


export const store = configureStore({
    reducer: {
        newsFeed: newsFeedReducer,
        profile: profileReducer
    },
});

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch