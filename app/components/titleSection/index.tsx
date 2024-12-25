'use client'

import s from './title.module.css'
import iconDoc from '../../assets/icons/task.svg'
import Image from 'next/image'
import TestSection from '../testSection'
import PromptButton from '../UI/promptButton'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/lib/store'


const TitleSection: React.FC = () => {

    const {
        data
    }  = useSelector((state:RootState) => state.task)

    const {
        title,
        text,
        level
    } = data

    return (
        <section className={s.Task}>
            <div className={s.TaskHeader}>
                <div>
                    <Image alt='iconDoc' src={iconDoc} />
                    <span>Задания</span>
                </div>
                <div className="diffInfo">
                    <p>Сложность</p>
                    {new Array(+level).fill(null).map((lvl,ind) => {
                        if (ind + 1 <=  3 ){
                            return <span key={lvl} className="lvl">✽</span>
                        }
                    })}
                </div>
            </div>
            <div className={s.TaskResult}>
                <h3>Задание выполнено!</h3>
                <p>Следующее задание</p>
            </div>
            <div className={s.TaskContent}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <PromptButton/>
            <TestSection />
        </section>
    )
}

export default TitleSection