import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const initialState = {
    favorites: []
}
export const fetchFavorites = createAsyncThunk("fetch/favorites", async(_,thunkAPI) => {
    try {
        const res = await fetch("http://localhost:3030/favorite", {
            headers: {
                "Content-Type":"favorites/json",
                Authorization: `Bearer ${thunkAPI.getState().application.token}`
            }
        })
        const favorite = await res.json()
        return favorite
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const addPropertyInFavorite = createAsyncThunk("addProperty/fetch", async(id,thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:3030/favorite/${id}`, {
            headers: {
                "Content-Type":"favorites/json",
                Authorization: `Bearer ${thunkAPI.getState().application.token}`
            },
            method: "PATCH"
        })
        const favorite = await res.json()
        return favorite
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const deletePropertyInFavorite = createAsyncThunk("deleteProperty/fetch", async(id,thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:3030/favoriteUpdate/${id}`, {
            headers: {
                "Content-Type":"favorite/json",
                Authorization: `Bearer ${thunkAPI.getState().application.token}`
            },
            method: "PATCH"
        })
        const favorite = await res.json()
        console.log(favorite)
        
        return thunkAPI.fulfillWithValue(favorite)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchFavorites.fulfilled, (state,action) => {
            state.favorites = action.payload
        })
        .addCase(addPropertyInFavorite.fulfilled, (state,action) => {
            state.favorites.push(action.payload)
        })
        .addCase(deletePropertyInFavorite.fulfilled, (state,action) => {
            state.favorites = action.payload
        })
    }
})

export default favoriteSlice.reducer