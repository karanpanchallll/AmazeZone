import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import rootreducers from "./redux/reducers/main.js";

const store = configureStore({
    reducer: rootreducers, // The root reducer
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(thunk), // Add custom middleware
    devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});

export default store;