import { asyncTask } from '@/app/service/api/task/task.api';
import { TaskParams } from './../../service/api/task/types';
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getTaskAction = createAsyncThunk('get/task', async (params: TaskParams, {rejectWithValue}) => {
    try {
        const response = await asyncTask(params)
        return response
    } catch(e){
        rejectWithValue(e)
    }
})