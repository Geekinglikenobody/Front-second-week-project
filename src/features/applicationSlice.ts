import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    error: null,
    singingUp: false,
    singingIn: false,
    image: [],
    token: localStorage.getItem("token"),
    user: {}
}

export const authSingUp = createAsyncThunk(
    "auth/singup",
    async({login, password, avatar}, thunkAPI) => {
        try {
            const formData = new FormData()
            console.log(avatar);
            
            formData.append('avatar', avatar)
            formData.append('login', login)
            formData.append('password', password)

            const res = await fetch("http://localhost:3030/registUs/", {
                method: "POST",
                body: formData
            })
            
            const date = await res.json()
            console.log(date);

            if(date.error) {
                return thunkAPI.rejectWithValue(date.error)
            }

            return date
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
    })

export const authSingIn = createAsyncThunk(
    "auth/singIn",
    async({login, password}, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:3030/login/", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({login,password})
            })
            const token = await res.json()
            if (token.error) {
                return thunkAPI.rejectWithValue(token.error)
            }
            localStorage.setItem("token", token)
            return token
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const getUser = createAsyncThunk(
    "image/fetch",
    async(_,thunkAPI)=> {
        try {
            const res = await fetch(`http://localhost:3030/user`, {
                method: 'GET',
                headers: {Authorization: `Bearer ${thunkAPI.getState().application.token}`}
            })
            
            const img = await res.json()
            console.log(img);
            return img
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)

       }
    }
)

export const exit = createAsyncThunk(
    "exit/fetch", async(_,thunkAPI) => {
        return localStorage.clear()
    }
)
const applicationSlice = createSlice({
    name:"application",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(authSingUp.fulfilled,(state,action) => {
            state.image = action.payload.avatar
            state.singingUp = true;
            state.error = null
        })
        .addCase(authSingUp.rejected, (state,action) => {
            state.singingUp = false;
            state.error = action.payload
        })
        .addCase(authSingUp.pending, (state, action) => {
            state.singingUp = false
            state.error = null
        })
        .addCase(authSingIn.fulfilled, (state, action) => {
            state.singingIn = true
            state.error = null
            state.token = action.payload
        })
        .addCase(authSingIn.rejected, (state,action) => {
            state.error = action.payload;
        })
        .addCase(authSingIn.pending, (state) => {
            state.error = null
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        .addCase(exit.fulfilled,(state,action) => {
            state.token = null
            state.user = {} 
            state.singingIn = false
            state.singingUp = false
        })
    }
})

export default applicationSlice.reducer