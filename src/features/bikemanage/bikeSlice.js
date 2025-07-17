import { createSlice } from "@reduxjs/toolkit";

const bikeSlice = createSlice({
    name: "bikemanage",
    initialState: [],
    reducers: {
        addBike: (state, action) => {
            // Push the new bike to the state array
            // state.push(action.payload);
            console.log(action);
        }
    }
});

// Export the action creator
export const { addBike } = bikeSlice.actions;

// Export the reducer
export default bikeSlice.reducer;
