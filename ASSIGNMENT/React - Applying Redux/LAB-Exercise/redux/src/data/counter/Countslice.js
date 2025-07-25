import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const Countslice = createSlice({
    name : "counter",
    initialState,
    reducers :{
         increment : (state)=>{
            state.value += 1
        },
        decrement : (state)=>{
            state.value -= 1
        },
        zero : (state)=>{
            state.value = initialState.value
        }
    }
})

export const {increment,decrement,zero} = Countslice.actions

export default Countslice.reducer;