import { TaskResponse } from "@/app/service/api/task/types";

export interface TaskState {
    data: TaskResponse,
    loading: boolean,
    error: null | undefined | string
  }
  