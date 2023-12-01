import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    property: [],
    filteredProperty: []
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
        const res = await fetch("http://localhost:3030/property", {
            headers: {
                "Content-Type":"application/json"
            },
            method: "POST",
            // body: JSON.stringify({text,newsId:news, userId: user})
        })

        const date = await res.json()
        
        return thunkAPI.fulfillWithValue(date)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
export const filterProperty = createAsyncThunk("filter/property", async({typeProperty,rooms,minPrice,maxPrice}, thunkAPI) => {
    console.log(typeProperty,rooms,minPrice,maxPrice);
    
    try {
        const res = await fetch("http://localhost:3030/property/filter", {
            headers: {
                "Content-Type":"application/json"
            },
            method: "POST",
            body: JSON.stringify({typeProperty,rooms,minPrice,maxPrice})
        })
        const date = await res.json()
        console.log(date);
        
        return thunkAPI.fulfillWithValue(date)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
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
        builder.addCase(addProperty.fulfilled, (state,action) => {
            state.property.push(action.payload)
        })
        builder.addCase(filterProperty.fulfilled, (state,action) => {
            state.filteredProperty = action.payload
        })
    }
}) 

export default propertySlice.reducer