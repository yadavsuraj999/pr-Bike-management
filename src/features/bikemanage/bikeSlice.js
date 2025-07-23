import { createSlice, nanoid } from "@reduxjs/toolkit";

const bikeSlice = createSlice({
    name: "bikemanage",
    initialState: {
        list: JSON.parse(localStorage.getItem("Bike")) || [],
        islogin: JSON.parse(localStorage.getItem("isloggedin")) || false
        
    },
    reducers: {
        addBike: (state, action) => {
            const newbike = { id: nanoid(), ...action.payload }
            state.list.push(newbike);
            localStorage.setItem("Bike", JSON.stringify(state.list))
        },
        deleteBike: (state, action) => {
            state.list = state.list.filter((bike) => {
                return bike.id !== action.payload
            })

            localStorage.setItem("Bike", JSON.stringify(state.list))
        },
        editBike: (state, action) => {
            const index = state.list.findIndex((bike) => {
                return bike.id === action.payload.id
            });

            if (index !== -1) {
                state.list[index] = action.payload;
            }
            localStorage.setItem("Bike", JSON.stringify(state.list))
        },
        sortprice: (state, action) => {
            const array = JSON.parse(localStorage.getItem("Bike")) || []
            
            state.list = array.sort((a, b) => {
                console.log(array);
                if (action.payload) {
                    return a.price - b.price
                } else {
                    return b.price - a.price
                }
                
            })
        },
        searchbike: (state, action) => {
            const search = action.payload.toLowerCase()
            const array = JSON.parse(localStorage.getItem("Bike")) || []
            state.list = array.filter((secr) => {
                return secr.name.toLowerCase().includes(search)
            })
        },
        login: (state, action)=>{
            
        }

    }
});


export const { addBike, deleteBike, editBike, sortprice, searchbike,  } = bikeSlice.actions;

export default bikeSlice.reducer;



// const array = JSON.parse(localStorage.getItem("Bike")) || []

//             state.list = array.sort((a, b) => {
//                 if (action.payload) {
//                     return a.price - b.price
//                 } else {
//                     return b.price - a.price
//                 }
//             })