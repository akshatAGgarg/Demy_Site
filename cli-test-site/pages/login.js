import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        // Mock login logic
        if (email && password) {
            localStorage.setItem('isLoggedIn', 'true');
            router.push('/');
        }
    };

    return (
        <div className="auth-container">
            <div className="glass-card">
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
                <div className="link-text">
                    Don't have an account? <Link href="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
}
