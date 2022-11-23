import { configureStore } from "@reduxjs/toolkit";
import { scupioAPI } from "./API/scupio.api";

export const store = configureStore({
    reducer: {
        [scupioAPI.reducerPath]: scupioAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(scupioAPI.middleware),
});