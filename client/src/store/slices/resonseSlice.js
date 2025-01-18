import { createSlice } from "@reduxjs/toolkit";

const OutputSlice  = createSlice({
  name:'output',
  initialState:null,
  reducers:{
    setData:(state,action)=>{
     return {...action.payload}
    }
  }
})

export default OutputSlice;

export const OutputSliceAction = OutputSlice.actions;