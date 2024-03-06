import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        {
            id: 1,
            status: 'pending',
            title: 'Remove Button',
            description:
                'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
            date: '2023-08-28',
            assignedTo: 'Mahin Hasan',
            priority: 'high',
        }
    ],
    userSpecificTasks: [],
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
        removeTask: (state, { payload }) => {
            state.tasks = state.tasks.filter((item) => item.id !== payload);
        },
        updateStatus: (state, { payload }) => {
            const target = state.tasks.find((item) => item.id === payload.id);
            target.status = payload.status;
            // multiple parameters are passed from payload in TaskCard.jsx
        },
        userTasks: (state, { payload }) => {
            state.userSpecificTasks = state.tasks.filter((item) => item.assignedTo === payload)
        }
    },
})

export const { addTask, updateStatus, removeTask, userTasks } = tasksSlice.actions;

//conecting to store
export default tasksSlice.reducer;