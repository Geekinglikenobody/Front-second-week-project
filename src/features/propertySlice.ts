import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    property: []
}

export const fetchProperty = createAsyncThunk("get/property", async(_,thunkAPI) => {
    try {
        const res = await fetch("http://localhost:3030/property")
        const property = await res.json()
        return property
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addProperty = createAsyncThunk("add/property", async(data, thunkAPI) => {
    try {
        
    } catch (error) {
        
    }
})
const propertySlice = createSlice({
    name:"property",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProperty.fulfilled, (state,action) => {
            state.property = action.payload
        })
    }
}) 

export default propertySlice.reducer