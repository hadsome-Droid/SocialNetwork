import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v1} from "uuid";

type Post = {
    id: string
    authorName: string
    postText: string
    postDate: string
    likeCount: string
    isLiked: boolean
}

type InitialState = {
    newsFeed: Post[]
}

const initialState: InitialState = {
    newsFeed: [
        {authorName: 'Ivan', postText: 'Непрерывная интеграция (CI)', postDate: "22.10.22", likeCount: '1', id: v1(), isLiked: false},
        {authorName: 'Nadia', postText: 'Непрерывная доставка (CD)', postDate: "12.01.23", likeCount: '25', id: v1(), isLiked: true},
        {authorName: 'Alex', postText: 'Docker - это открытая платформа', postDate: "2.02.23", likeCount: '53', id: v1(), isLiked: true},
    ]
}



const slice = createSlice({
    name: 'newsFeed',
    initialState,
    reducers: {
        addPost: (state, action:PayloadAction<{newPost: Post}>) => {
            state.newsFeed.unshift(action.payload.newPost)
        },
        toggleLike: (state, action:PayloadAction<{id: string, isLiked: boolean, newLikeCount: string}>) => {
            const index = state.newsFeed.findIndex(el => el.id === action.payload.id)
            if(index !== -1) {
                state.newsFeed[index] = {...state.newsFeed[index], likeCount: action.payload.newLikeCount, isLiked: action.payload.isLiked}
            }
        },
        loadMorePosts: (state, action: PayloadAction<{newPosts: Post[]}>) => {
            state.newsFeed = [...state.newsFeed, ...action.payload.newPosts];
        }
    }
})

export const newsFeedReducer = slice.reducer
export const newsFeedActions = slice.actions