import { createSlice } from "@reduxjs/toolkit";


const authSlice  = createSlice({
  name:'auth',
  initialState:{},
  reducers:{
    setFormData:(state,action)=>{
     return {...action.payload}
    },
    setUserData:(state,action)=>{
      return {...action.payload}
    },
    signout:(state)=>{
      if(window.localStorage.getItem('currUser')){
        window.localStorage.removeItem('currUser');
      }
      return {};
    }
  }
})

export default authSlice;

export const authSliceAction = authSlice.actions;