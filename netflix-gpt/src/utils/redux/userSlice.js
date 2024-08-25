import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState : {
        userInfo: []
    },
    reducers : {
        addUser : ( state, action ) => {
            state.userInfo = action.payload;
        },
        removeUser : ( state) => {
            state.userInfo = null;
        }
    }
})

export default userSlice.reducer;
export const  {addUser, removeUser} = userSlice.actions;