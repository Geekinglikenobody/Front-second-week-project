import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  property: [],
  filteredProperty: [],
};

export const fetchProperty = createAsyncThunk(
  "get/property",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3030/property");
      const property = await res.json();
      return property;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProperty = createAsyncThunk(
  "add/property",
  async (
    {
      typeSell,
      address,
      typeFloor,
      rooms,
      quadrature,
      typeRemont,
      price,
      desc,
      images,
    },
    thunkAPI
  ) => {
    console.log("dwdwdwdw",
      typeSell,
      address,
      typeFloor,
      rooms,
      quadrature,
      typeRemont,
      price,
      desc, images
    );

    const formData = new FormData();

    for(const img of images) {

        formData.append("img", img);
    }
    formData.append("typeSell", typeSell);
    formData.append("address", address);
    formData.append("typeFloor", typeFloor);
    formData.append("rooms", rooms);
    formData.append("quadrature", quadrature);
    formData.append("typeRemont", typeRemont);
    formData.append("price", price);
    formData.append("desc", desc);

    console.log(formData)

    try {
      const res = await fetch("http://localhost:3030/property", {
        method: "POST",
        body: formData,
      });

      const property = await res.json();
      console.log(property);

      return thunkAPI.fulfillWithValue(property);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const filterProperty = createAsyncThunk(
  "filter/property",
  async ({ typeProperty, rooms, minPrice, maxPrice }, thunkAPI) => {
    console.log(typeProperty, rooms, minPrice, maxPrice);

    try {
      const res = await fetch("http://localhost:3030/property/filter", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ typeProperty, rooms, minPrice, maxPrice }),
      });
      const date = await res.json();
      console.log(date);

      return thunkAPI.fulfillWithValue(date);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    addFilteredProperty(state, action) {
      state.filteredProperty = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProperty.fulfilled, (state, action) => {
      state.property = action.payload;
    });
    builder.addCase(addProperty.fulfilled, (state, action) => {
      state.property.push(action.payload);
    });
    builder.addCase(filterProperty.fulfilled, (state, action) => {
      state.filteredProperty = action.payload;
    });
  },
});

export const { addFilteredProperty } = propertySlice.actions;
export default propertySlice.reducer;