import { configureStore } from '@reduxjs/toolkit'
import selectReducer from './features/selectSlice'
import petListReducer from './features/petTilesSlice'
import searchReducer from './features/searchSlice'



export const store = configureStore({
    reducer: {
        select: selectReducer,
        search: searchReducer,
        petList: petListReducer,
    },
})
