import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags: ["Tasks"]
        }),
        updateTask: builder.mutation({
            query: ({ id, data }) => ({ // will recieve an object
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Tasks'],// works like refetch
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: '/tasks',
                method: 'POST',
                body: task,
            }),
            invalidatesTags: ['Tasks'],// works like refetch
        })
    }),
});

export const { useGetTasksQuery, useUpdateTaskMutation, useAddTaskMutation } = baseApi;

export default baseApi;  