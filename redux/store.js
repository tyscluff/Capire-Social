import { configureStore } from "@reduxjs/toolkit";
import joinStreamSlice from "./slices/joinStreamSlice";
import messagingSlice from "./slices/messagingSlice";
import utilSlice from "./slices/utilSlice";
import userSlice from './slices/userSlice';
import myStreamsSlice from "./slices/myStreamsSlice";

export const store = configureStore({
    reducer: { 
        messaging: messagingSlice,
        joinStream: joinStreamSlice,
        util: utilSlice,
        user: userSlice,
        myStreams: myStreamsSlice
    }
});