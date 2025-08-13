import React from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Button from './ui/Button';

const AuthLayout: React.FC = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOut();
        navigate('/login');
    }

    return (
        <div>
            <header className="bg-slate-950/80 backdrop-blur-sm border-b border-slate-800 p-4 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold text-white">
                       <span className="text-violet-400">Enki</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        {user && <span className="text-sm text-slate-400 hidden sm:block">{user.email}</span>}
                        <Button onClick={handleSignOut} variant="secondary" size="sm">Logout</Button>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;