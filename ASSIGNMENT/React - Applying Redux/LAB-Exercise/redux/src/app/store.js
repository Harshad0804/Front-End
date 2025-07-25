import { configureStore } from "@reduxjs/toolkit";
import  countSlice  from "../data/Counter/countSlice";
import todoslice from "../data/todolist/todoslice";

export const store = configureStore({
    reducer :{
        counter : countSlice,
        todo : todoslice
    }
})