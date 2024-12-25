'use client'
import Loading from "@/app/components/loading"
import MainSection from "@/app/components/mainSection"
import ResultSection from "@/app/components/resultSection"
import TitleSection from "@/app/components/titleSection"
import { AppDispatch, RootState } from "@/app/lib/store"
import { useParams } from "next/navigation"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import s from './page.module.css'
import { getTaskAction } from "@/app/lib/asyncActions/taskActions"


const TaskPage: React.FC = () => {
    const {idTask, typeTask} = useParams()
    const mainRef = useRef<HTMLDivElement>()

    
    const dispatch = useDispatch<AppDispatch>()
    const {
        data,
        loading,
        error
    } = useSelector((state:RootState) => state.task)

    useEffect(() => {
        if (typeof idTask == 'string' && typeof typeTask === 'string'){
            const params = {
                id: idTask,
                type: typeTask
            }
            dispatch(getTaskAction(params))
        }
    },[])

    if (loading) return <Loading/>
    return (
        <div className={s.content}>
            <TitleSection/>
            <MainSection mainRef={mainRef}/>
            <ResultSection/>
        </div>
    )
}

export default TaskPage