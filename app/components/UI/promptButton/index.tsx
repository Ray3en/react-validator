'use client'

import s from './promptButton.module.css'
import promptSvg from '../../../assets/icons/prompt_list.svg'
import arrowSvg from '../../../assets/icons/arrow.svg'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/lib/store'
import { useState } from 'react'


const PromptButton: React.FC = () => {

    const {
        data
    } = useSelector((state: RootState) => state.task)

    const [isOpen, setOpen] = useState(false)

    return (
        <div className={s.Prompt}>
            <button className={s.PromptBtn} onClick={() => setOpen(!isOpen)}>
              <Image alt='icon' src={promptSvg} className={s.image}/>
              Подсказка
              <Image alt='icon' src={arrowSvg} className={`${s.image} ${(!isOpen) ? s.rotated : ''}`}/>
            </button>
            <div style={{display: (isOpen) ? 'block' : 'none'}}>
                <p>{data.prompt}</p>
            </div>
        </div>
    )
}

export default PromptButton