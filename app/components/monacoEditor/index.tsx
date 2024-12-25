'use client';

import React from 'react';
import { Editor } from '@monaco-editor/react';

interface MonacoEditorProps {
    value?: string;
    language?: string;
    theme?: string;
    height?: string;
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({
    value = '',
    language,
    theme = 'vs-light',
    height = '100%',
}) => {
  
    return <Editor 
        height={height} 
        theme={theme} 
        value={value} 
        language={language} 
    />;
};

export default MonacoEditor;
