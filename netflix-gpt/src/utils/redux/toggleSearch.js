import { createSlice } from "@reduxjs/toolkit";

const toggleSearch = createSlice({
    name: "search",
    initialState: {
        toggle: false
    },
    reducers: {
        toggleState : (state,action) => {
            state.toggle = action.payload;
        }
    }
})

export default toggleSearch.reducer;
export const {toggleState} = toggleSearch.actions;