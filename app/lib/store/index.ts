import { combineReducers, configureStore } from '@reduxjs/toolkit'
import taskSlice from '@/app/lib/store/task/taskSlice'



  const rootReducer = combineReducers({
    task: taskSlice,
  })  


export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']