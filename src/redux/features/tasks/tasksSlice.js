import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};


const tasksSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            //generate unique id
            if (state.tasks.length === 0) {
                state.tasks.push({ id: 1, status: 'pending', ...payload });
            }
            else {
                //at is a array method which is later added to javascript and -1 will give the last array element
                const lastElement = state.tasks.at(-1);
                state.tasks.push({
                    id: lastElement.id + 1,
                    status: 'pending',
                    ...payload
                });

            }
        },
        removeTask: (state, payload) => {
            state.tasks.filter((item) => item.id !== payload);
        },
    },
})

export const { addTask } = tasksSlice.actions;

//conecting to store
export default tasksSlice.reducer;