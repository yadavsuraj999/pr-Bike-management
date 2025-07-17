import { createSlice, nanoid } from "@reduxjs/toolkit";

const bikeSlice = createSlice({
    name: "bikemanage",
    initialState: {
        list: JSON.parse( localStorage.getItem("Bike")) || []
    },
    reducers: {
        addBike: (state, action) => {
            const newbike = {id: nanoid(), ...action.payload}
            state.list.push(newbike);
            localStorage.setItem("Bike", JSON.stringify(state.list))
            console.log(action)
        },
        deleteBike: (state, action) =>{
            state.list = state.list.filter((bike)=>{
                return bike.id !== action.payload
            })

            localStorage.setItem("Bike", JSON.stringify(state.list))
        },
        editBike: (state, action) =>{
            
        }
    }
});


export const { addBike, deleteBike } = bikeSlice.actions;

export default bikeSlice.reducer;
