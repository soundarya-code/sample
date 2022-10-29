import {createSlice} from "@reduxjs/toolkit";
const initialState={
    cars:["Model1","Model2","Model3","Model4","Model5"]
}
const carslice=createSlice({
    name:"car",
    initialState,
    reducers:{},
})
export const selectCars=state=>state.car.cars
export default carslice.reducer