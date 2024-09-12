import { createSlice } from "@reduxjs/toolkit";

const sideBar = createSlice({
    name : "sideBar",
    initialState : {
        showSideBar : false,
    },
    reducers: {
        toggleSideBar : (state) =>{
            state.showSideBar = !state.showSideBar;
        }
    }
})

export default sideBar.reducer;
export const { toggleSideBar }  = sideBar.actions;