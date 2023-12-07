import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: []
};

export const fetchComments = createAsyncThunk(
    "comments/fetch",
    async(_,thunkAPI) => {
        try {
            const res = await fetch("http://localhost:3001/comments", {
                headers: {
                    "Content-Type":"application/json"
                }
            })

            const comments = await res.json()
            
            return comments
            
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })
export const addComments = createAsyncThunk(
    "addComments/fetch",
    async({text,news,user},thunkAPI) => {
        
        try {
            const res = await fetch("http://localhost:3001/comments", {
                headers:{
                    "Content-Type":"application/json"
                },
                method: "POST",
                body: JSON.stringify({text,newsId:news, userId: user})
            })
            
            const date = await res.json()
            
            return thunkAPI.fulfillWithValue(date)

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })

export const removeComments = createAsyncThunk(
    "removeComment/fetch",
    async(id,thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:3001/comments/${id}`, {
                headers: {
                    "Content-Type":"application/json"
                },
                method:"DELETE",
            })

            const date = await res.json()
            
            return thunkAPI.fulfillWithValue(date)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
const commentSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.fulfilled,(state, action) => {
            state.comments = action.payload
            
        })
        builder.addCase(addComments.fulfilled,(state,action) => {
            state.comments.push(action.payload)
            
        })
        builder.addCase(removeComments.fulfilled, (state,action) => {
            state.comments = state.comments.filter((item) => item._id !== action.payload._id)
         })
    },
})

export default commentSlice.reducer
