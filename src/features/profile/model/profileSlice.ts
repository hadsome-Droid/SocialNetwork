import {createSlice} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../../../shared/utils/createAppThunk";
import {profileApi} from "../api/profileApi";

type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

type PhotosType = {
    small: string | null
    large: string | null
}

type ProfileType = {
    aboutMe: string | null
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: PhotosType
}

type InitialType = {
    profileInfo: ProfileType | null
}


const initialState: InitialType = {
    profileInfo: null
}

const slice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getProfile.fulfilled, (state, action) => {

                state.profileInfo = action.payload.profileInfo
            })
    }
})

const getProfile = createAppAsyncThunk<{profileInfo: ProfileType}, undefined>(
    `${slice.name}/getProfile`,
    async (arg, thunkAPI) => {

        const res = await profileApi.getProfile()

        return {profileInfo: res.data}
    }
)

export const profileReducer = slice.reducer
export const profileActions = slice.actions
export const profileThunks = {getProfile}