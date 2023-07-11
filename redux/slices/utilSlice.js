import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loadStreams: false
}

export const utilSlice = createSlice({
    name: "util",
    initialState,
    reducers: {
        toggleLoadStreams: (state, action) => {
            state.loadStreams = !state.loadStreams;
        }
    }
});

export const selectToggleStreams = state => state.util.loadStreams;

export const { toggleLoadStreams } = utilSlice.actions;

export default utilSlice.reducer;