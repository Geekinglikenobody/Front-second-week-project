import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  complains: [],
  isLoading: false,
};

export const fetchComplains = createAsyncThunk(
  "complains/get",
  async (_, thunkAPI) => {
    try {
      const token = JSON.parse(
        JSON.stringify(localStorage.getItem("token") || "")
      );

      const res = await fetch("http://localhost:3030/complains", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      // console.log(data);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addComplains = createAsyncThunk(
  "complains/add",
  async ({ text, userId, number }, thunkAPI) => {
    try {
      const token = JSON.parse(
        JSON.stringify(localStorage.getItem("token") || "")
      );
      const res = await fetch("http://localhost:3030/complains", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({ text, userId, number }),
      });

      const data = await res.json();
      console.log(data, 'это дата');
      
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteComplains = createAsyncThunk(
  "complains/delete",
  async (_id, thunkAPI) => {
    try {
      const token = JSON.parse(
        JSON.stringify(localStorage.getItem("token") || "")
      );
      const res = await fetch(`http://localhost:3030/complains/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return _id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const complaintSlice = createSlice({
  name: "complains",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComplains.pending, (state, action) => {
      state.complains = [];
      state.isLoading = true;
    });
    builder.addCase(fetchComplains.fulfilled, (state, action) => {
      state.complains = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchComplains.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addComplains.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addComplains.fulfilled, (state, action) => {
      state.complains = [...state.complains, action.payload];
      state.isLoading = false;
    });
    builder.addCase(addComplains.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(deleteComplains.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteComplains.fulfilled, (state, action) => {
      state.complains = state.complains.filter(
        (complaint) => complaint._id !== action.payload
      );
      state.isLoading = false;
    });
    builder.addCase(deleteComplains.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default complaintSlice.reducer;
