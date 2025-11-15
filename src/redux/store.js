import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userDataSlice"
import authReducer from "../redux/slice/authSlice"

const store=configureStore({
    reducer:{
        auth:authReducer,
        userData:userReducer,
    }
})
export default store