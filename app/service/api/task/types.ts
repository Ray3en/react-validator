export type TaskParams = {
    id: string,
    type: string
}

export interface TaskResponse {
    id: number | null; 
    title: string; 
    name: string; 
    text: string; 
    prompt: string; 
    settings: string; 
    level: string; 
    strange_word: string; 
    tests: string; 
    fields: TaskFild[]; 
}


export interface TaskFild {
    file_name: string; 
    value: string; 
}
