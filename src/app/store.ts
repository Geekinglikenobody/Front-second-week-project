import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import property from "../features/propertySlice";
export const store = configureStore({
    reducer: {
        application,
        property
    }
})