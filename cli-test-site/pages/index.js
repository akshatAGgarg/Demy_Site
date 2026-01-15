import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            router.push('/login');
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        router.push('/login');
    };

    return (
        <div className="home-layout">
            <div className="welcome-section">
                <h1 className="hero-title">Welcome Home</h1>
                <p style={{ color: '#94a3b8', fontSize: '18px' }}>
                    You have successfully logged into your premium dashboard.
                </p>
                <button className="btn btn-logout-2" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '60px' }}>
                <div className="glass-card" style={{ maxWidth: 'none' }}>
                    <h3>Profile Overview</h3>
                    <p style={{ marginTop: '10px', color: '#94a3b8' }}>Securely managed by your new Auth flow.</p>
                </div>
                <div className="glass-card" style={{ maxWidth: 'none', borderLeft: '1px solid var(--secondary-glow)' }}>
                    <h3>Activity Feed</h3>
                    <p style={{ marginTop: '10px', color: '#94a3b8' }}>Real-time updates appearing here.</p>
                </div>
            </div>
        </div>
    );
}
