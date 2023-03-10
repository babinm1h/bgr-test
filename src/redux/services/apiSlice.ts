import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { BaseQueryFn, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
  credentials: "omit",
  prepareHeaders(headers, api) {},
});

export const apiSlice = createApi({
  baseQuery,
  endpoints: (build) => ({}),
});
