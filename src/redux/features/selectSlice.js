import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  isSelected: false,
  count: 0,
}


export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isSelected = !state.isSelected;
    },
    select: (state) => {
        state.count++;
    },
    deselect: (state) => {
        state.count--;
    },
    clear: (state) => {
        state.count = 0;
    },
    selectAll: (state) =>{
      
    }
  }
});

export const { toggle, select, deselect, clear } = selectSlice.actions;

export default selectSlice.reducer;