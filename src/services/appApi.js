import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://abek-task5.herokuapp.com`,
  }),

  endpoints: (builder) => ({
    // signup user data
    signupUser: builder.mutation({
      query: (user) => ({
        url: `/users`,
        method: "POST",
        body: user,
      }),
    }),

    // login user
    loginUser: builder.mutation({
      query: (user) => ({
        url: `/users/login`,
        method: "POST",
        body: user,
      }),
    }),

    // logout
    logOutUser: builder.mutation({
      query: (payload) => ({
        url: "/logout",
        method: "DELETE",
        body: payload,
      }),
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogOutUserMutation,
} = appApi;

export default appApi;
