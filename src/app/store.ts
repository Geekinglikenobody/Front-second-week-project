import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import property from "../features/propertySlice";
import favorite from "../features/favoriteSlice"
import comments from "../features/commentSlice"
export const store = configureStore({
    reducer: {
        application,
        property,
        favorite,
        comments
    }
})