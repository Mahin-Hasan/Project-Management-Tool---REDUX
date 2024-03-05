import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Mahin bhai',
    email: 'mahin@gmail.com',
    userTasks: [],
};

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
});

export default userSlice.reducer;