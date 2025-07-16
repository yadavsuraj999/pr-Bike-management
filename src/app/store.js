import { configureStore } from "@reduxjs/toolkit";
import bikereducer from "../features/bikemanage/bikeSlice";

export const store = configureStore({
    reducer:{
        bikemanage: bikereducer
    }
})