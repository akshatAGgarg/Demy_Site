import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSignup = (e) => {
        e.preventDefault();
        if (name && email && password) {
            localStorage.setItem('isLoggedIn', 'true');
            router.push('/');
        }
    };

    return (
        <div className="auth-container">
            <div className="glass-card">
                <h2>Create Account</h2>
                <form onSubmit={handleSignup}>
                    <div className="input-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                    <button type="submit" className="btn btn-primary">Create Account</button>
                </form>
                <div className="link-text">
                    Already have an account? <Link href="/login">Sign in</Link>
                </div>
            </div>
        </div>
    );
}
