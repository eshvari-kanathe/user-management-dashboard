import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slice/userDataSlice"

const store=configureStore({
    reducer:{
        userData:userReducer,
    }
})
export default store