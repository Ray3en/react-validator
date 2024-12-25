'use client'
import { useState } from 'react';
import s from './main.module.css'
import MonacoEditor from '../monacoEditor';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/lib/store';
import { languages } from './editorLanguage';

const MainSection: React.FC = ({mainRef}) => {
    const [fieldActive, setFieldActive] = useState(0)

    const [code, setCode] = useState('console.log(123)');

    const {
        data
    } = useSelector((state: RootState) => state.task)

    const {
        fields
    } = data


    const filedLang = fields[fieldActive]?.file_name.split('.')[fields[fieldActive]?.file_name.split('.').length - 1] || 'javascript'

    console.log(languages[filedLang])
    return (
        <section className={s.Main} ref={mainRef}>
            <nav className={s.ToolBar}>
                <div
                    style={{
                        borderBottom: "1px solid #80808085",
                        width: "0.5rem"
                    }}
                />
                {fields.map((field,ind) => (
                    <button 
                        key={field.file_name}
                        className={`${s.ButtonField} ${(ind === fieldActive ? s.Active : '' )}`} 
                        onClick={() => setFieldActive(ind)}
                    >
                        {field.file_name}
                    </button>
                ))}
                <div
                    style={{
                        flexGrow: "1",
                    }}
                />
            </nav>
            <MonacoEditor
                value={fields[fieldActive]?.value}
                language={languages[filedLang]}
                theme="vs-dark"
                height="100%"
            />
        </section>
    );
}

export default MainSection