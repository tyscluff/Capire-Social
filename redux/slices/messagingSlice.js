import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    messages: [], 
    body: "",
    streamId: ''
};

export const messagingSlice = createSlice({
    name: "messaging",
    initialState,
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        setStreamId: (state, action) => {
            state.streamId = action.payload;
        },
        setBody: (state, action) => {
            state.body = action.payload;
        },
        addMessage: (state, action) => {
            state.messages = [action.payload, ...state.messages];
        },
        clearMessages: (state, action) => {
            state.messages = [];
        }
    } 
});

export const selectMessages = state => state.messaging.messages;
export const selectStreamId = state => state.messaging.streamId;
export const selectBody = state => state.messaging.body;

export const { setMessages, setStreamId, setBody, addMessage, clearMessages } = messagingSlice.actions;

export default messagingSlice.reducer;