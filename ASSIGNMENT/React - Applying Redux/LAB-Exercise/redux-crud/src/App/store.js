import { configureStore } from "@reduxjs/toolkit";
import { adminSlice } from "../Slicedata/AdminSlice";

export const store = configureStore({
    reducer :{
        admins : adminSlice
    }
})