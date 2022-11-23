import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { hello } from "./models.api";

export const scupioAPI = createApi({
    reducerPath: "API/api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_ADDRESS
    }),
    endpoints: build => ({
        DBversion: build.query<hello, any>({
            query: () => ({
                url: ""
            })
        })
    })
});

export const {useDBversionQuery} = scupioAPI;