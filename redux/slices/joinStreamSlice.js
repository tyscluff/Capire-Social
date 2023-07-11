import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: "",
    streams: []
}; 

export const joinStreamSlice = createSlice({
    name: "joinStream",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setSearchStreams: (state, action) => {
            state.streams = action.payload;
        }
    }
});

export const selectSearch = state => state.joinStream.search;
export const selectStreams = state => state.joinStream.streams;

export const { setSearch, setSearchStreams } = joinStreamSlice.actions;

export default joinStreamSlice.reducer;