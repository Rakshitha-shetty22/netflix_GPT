import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieData",
    initialState : {
        todaysRecom: [],
        newInShows: [],
    },
    reducers: {
        addtodaysRecom : (state, action) =>{
            state.todaysRecom = action.payload;
        },
        addnewInShows : (state, action) =>{
            state.newInShows = action.payload;
        }

    }
})

export default movieSlice.reducer;
export const {addtodaysRecom, addnewInShows} = movieSlice.actions;