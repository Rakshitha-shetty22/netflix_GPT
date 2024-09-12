import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState : {
        userInfo: [],
        openAIkey: null,
    },
    reducers : {
        addUser : ( state, action ) => {
            state.userInfo = action.payload;
        },
        removeUser : ( state) => {
            state.userInfo = null;
        },
        addopenAIkey : ( state, action ) => {
            state.openAIkey = action.payload;
        },
    }
})

export default userSlice.reducer;
export const  {addUser, removeUser, addopenAIkey} = userSlice.actions;