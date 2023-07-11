import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authToken: null,
    email: null,
    userId: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthtoken: (state, action) => {
            state.authToken = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setUserId: (state, action) => {
            state.userId = action.payload
        },
        clearUser: (state, action) => {
            state.authToken = null;
            state.email = null;
            state.userId = null;
        }
    }
});

export const selectAuthToken = state => state.user.authToken;
export const selectEmail = state => state.user.email;
export const selectUserId = state => state.user.userId;

export const { setAuthtoken, setEmail, setUserId, clearUser } = userSlice.actions;

export default userSlice.reducer;