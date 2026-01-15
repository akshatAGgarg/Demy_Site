import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [command, setCommand] = useState('');
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const runTest = async () => {
        setLoading(true);
        setError('');
        setOutput('');
        try {
            const res = await fetch('/api/test', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ command })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Server error');
            setOutput(data.result);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>CLI Test Interface</h1>
            <textarea
                className={styles.textarea}
                rows={4}
                placeholder="Enter command / parameters for your CLI"
                value={command}
                onChange={e => setCommand(e.target.value)}
            />
            <button className={styles.button} onClick={runTest} disabled={loading}>
                {loading ? 'Running…' : 'Run Test'}
            </button>
            {error && <p className={styles.error}>Error: {error}</p>}
            {output && (
                <pre className={styles.output}><code>{output}</code></pre>
            )}
        </main>
    );
}
