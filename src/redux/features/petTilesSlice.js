import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
}

export const petTilesSlice = createSlice({
    name: 'petTiles',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setData } = petTilesSlice.actions;

export default petTilesSlice.reducer;
