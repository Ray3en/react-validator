import { useEffect, useRef } from 'react';
import s from './result.module.css';

const ResultSection: React.FC = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const jsCode = `
        const App = () => <h1>Hello, React in iframe!</h1>;
        ReactDOM.render(<App />, document.getElementById('root'));
    `;

    const compileCode = (js: string): string => {
        try {
            return Babel.transform(js, {
                presets: ['react', 'es2015']
            }).code;
        } catch (err) {
            console.error('Ошибка компиляции:', err);
            return `console.error("Ошибка компиляции: ${err.message}");`;
        }
    };

    const updateIframe = () => {
        if (iframeRef.current) {
            const compiledJs = compileCode(jsCode);
            const srcdoc = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Iframe Preview</title>
                </head>
                <body>
                    <div id="root"></div>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
                    <script>${compiledJs}</script>
                </body>
                </html>
            `;
            iframeRef.current.srcdoc = srcdoc;
        }
    };

    useEffect(() => {
        updateIframe();
    }, []);

    return (
        <div className={s.result}>
            <iframe
                ref={iframeRef}
                className={s.frame}
                sandbox="allow-scripts"
                title="Result Preview"
            />
        </div>
    );
};

export default ResultSection;
