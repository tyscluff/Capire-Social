import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    streams: []
};

export const myStreamsSlice = createSlice({
    name: "myStreams",
    initialState,
    reducers: {
        setStreams: (state, action) => { 
            state.streams = action.payload
        },
        setHasUnreadFalse: (state, action) => {
            const index = state.streams.findIndex(x => x.id === action.payload);
            if (index !== -1) {
                let newStream = state.streams[index];
                newStream.hasUnread = false;
                state.streams[index] = newStream
            };
        },
        setHasUnreadTrue: (state, action) => {
            const index = state.streams.findIndex(x => x.id === action.payload);
            if (index !== -1) {
                let newStream = state.streams[index];
                newStream.hasUnread = true; 
                state.streams[index] = newStream
            };
        },
        insertStream: (state, action) => {
            state.streams = [...state.streams, action.payload];
        },
        removeStream: (state, action) => {
            state.streams = state.streams.filter((stream) => stream.id !== action.payload);
        }
    }
});

export const selectStreams = state => state.myStreams.streams;

export const { setStreams, setHasUnreadFalse, setHasUnreadTrue, insertStream, removeStream } = myStreamsSlice.actions;

export default myStreamsSlice.reducer;