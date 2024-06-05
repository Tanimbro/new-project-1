import { createSlice } from "@reduxjs/toolkit";

const initialaState={
    userInfo:null
}

export const userSlice=createSlice({
    name:"authUser",
    initialaState,
    reducers:{
        createuser:(state, action)=>{
             state.userInfo=action.payload 
        }
    }
})
export const {createuser} = userSlice.actions
export default userSlice.reducer