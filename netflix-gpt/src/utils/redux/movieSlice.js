import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movieData",
    initialState : {
        nowplaying: [],
        newInShows: [],
        comedy: [],
        thriller: [],
        action: [],
        animated: [],
    },
    reducers: {
        addNowPlaying : (state, action) =>{
            state.nowplaying = action.payload;
        },
        addnewInShows : (state, action) =>{
            state.newInShows = action.payload;
        },
        addComedy : (state, action) =>{
            state.comedy = action.payload;
        },
        addThriller : (state, action) =>{
            state.thriller = action.payload;
        },
        addAction : (state, action) =>{
            state.action = action.payload;
        },
        addAnimated : (state, action) =>{
            state.animated = action.payload;
        },
    }
})

export default movieSlice.reducer;
export const {addNowPlaying, addnewInShows, addComedy, addThriller, addAction, addAnimated } = movieSlice.actions;