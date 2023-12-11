import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import property from "../features/propertySlice";
import complaintsReducer from '../features/complainSlice'

export const store = configureStore({
    reducer: {
        application,
        property,
        complaintsReducer,
    }
})