import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import movieSlice from './movieSlice';
import toggleSearch from './toggleSearch';
import sideBar from './sideBar';

const Store = configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,
        search : toggleSearch,
        sideBar : sideBar,
    }
})

export default Store;