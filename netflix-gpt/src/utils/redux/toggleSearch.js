import { createSlice } from "@reduxjs/toolkit";

const toggleSearch = createSlice({
    name: "search",
    initialState: {
        toggle: false
    },
    reducers: {
        toggleState : (state) => {
            state.toggle = !state.toggle;
        }
    }
})

export default toggleSearch.reducer;
export const {toggleState} = toggleSearch.actions;