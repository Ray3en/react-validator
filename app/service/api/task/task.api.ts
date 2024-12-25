import { instance } from "../intercepptor"
import { TaskParams, TaskResponse } from "./types"



export const asyncTask = async (params: TaskParams) :Promise<TaskResponse> => {
    const {type, id} = params
    const response = await instance.get(`/api/${type}/${id}`)
    return response.data
}