import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TaskState } from './types'
import { getTaskAction } from '../../asyncActions/taskActions'
import { TaskResponse } from '@/app/service/api/task/types'

const initialState: TaskState = {
    data: {
        id: null,
        title: '',
        name: '',
        text: '',
        prompt: '',
        settings: '',
        level: '',
        strange_word: '',
        tests: '',
        fields: [],
    },
    loading: false,
    error: null
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTaskAction.fulfilled, (state, action: PayloadAction<TaskResponse>) => {
                state.data = action.payload
                state.loading = false
            })
            .addCase(getTaskAction.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getTaskAction.rejected, (state, action: PayloadAction<Error>) => {
                state.error = action.payload.message
                state.loading = false
            })
    }
})

export default taskSlice.reducer
