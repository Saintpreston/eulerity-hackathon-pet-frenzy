import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  term: '',

}

export const searchSlice = createSlice({
  name: 'searchbar',
  initialState,
  reducers: {
    search: (state, action) => {
        state.term = action.payload;
    },
    
},
})

export const {search} = searchSlice.actions;

export default searchSlice.reducer;

