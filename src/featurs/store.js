import { configureStore } from "@reduxjs/toolkit";
import authSlies from "./users/authSlies";
import registration from "../pages/registration/idex";

const store =  configureStore({
    reducer:{
        registration:authSlies
    }
})
export default store