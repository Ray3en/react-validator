'use client'
import React from 'react'
import s from './test.module.css'
import Image from 'next/image'
import arrowSvg from '../../assets/icons/arrow.svg'
import checkDoneSvg from '../../assets/icons/check_done.svg'


const TestSection: React.FC = () => {
    const data = [
        {id: 1, value: 'Тест для 1000 на 20 процентов на 5 лет', tests: ['Переменная а','Переменная б']},
        {id: 2, value: 'Тест для 1000 на 20 процентов на 5 лет', tests: ['Переменная а','Переменная б']},
        {id: 3, value: 'Тест для 1000 на 20 процентов на 5 лет', tests: []},
        {id: 4, value: 'Тест для 1000 на 20 процентов на 5 лет', tests: []},
    ]

    return (
        <div className={s.Test}>
            <div className={s.TestInfo}>
                <h3>Задания</h3>
                <p>4/4 выполнено</p>
            </div>
            <ul className={s.TestWrapper}>
                {data.map(elem => (
                    <React.Fragment key={elem.id}>
                        <li className={s.TestElem}>
                            <Image alt='icon' src={checkDoneSvg}/>
                            <p>{elem.value}</p>
                            <Image alt='icon' src={arrowSvg}/>
                        </li>
                        <ul className={s.TestTestWrapper}>
                            {elem.tests.map((test, ind) => (
                                <li key={ind} className={s.TestElemTest}>
                                    <span className="QuadSpan"></span>
                                    {test}
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}

export default TestSection