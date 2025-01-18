import {configureStore} from '@reduxjs/toolkit'
import authSlice from '../slices/authSlice';
import fetchSlice from '../slices/fetchSlice';
import OutputSlice from '../slices/resonseSlice';


const appStore = configureStore({
  reducer:{
  auth:authSlice.reducer ,
  fetching:fetchSlice.reducer,
  output:OutputSlice.reducer     
  }
})

export default appStore;