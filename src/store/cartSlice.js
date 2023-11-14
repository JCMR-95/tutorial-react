import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:"cart",
    initialState:{items:[],total:0}
});

export default cartSlice.reducer;