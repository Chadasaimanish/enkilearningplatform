import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import Button from './ui/Button';
import Input from './ui/Input';
import Card from './ui/Card';
import { GoogleIcon, MailIcon, LockIcon } from './icons/Icons';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1)); // remove #
      const errorDescription = params.get('error_description');
      if (errorDescription) {
        setError(errorDescription.replace(/\+/g, ' '));
        // Clean up the URL
        window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
      }
    }
  }, []);

  const handleAuthAction = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage(null);

    try {
        let response;
        if (isSignUp) {
            response = await supabase.auth.signUp({ email, password });
            if (response.error) throw response.error;
            setMessage("Check your email for the confirmation link!");
        } else {
            response = await supabase.auth.signInWithPassword({ email, password });
            if (response.error) throw response.error;
            navigate('/');
        }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleLogin = async () => {
      setIsLoading(true);
      setError(null);
      const { error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
      });
      if(error) {
          setError(error.message);
          setIsLoading(false);
      }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          Welcome to <span className="text-violet-400">Enki</span>
        </h1>
        <p className="text-lg text-slate-400">Sign in to start your journey.</p>
      </div>

      <Card className="w-full max-w-md p-8">
        <form onSubmit={handleAuthAction} className="space-y-6">
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            icon={<MailIcon className="w-5 h-5 text-slate-400" />}
          />
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            icon={<LockIcon className="w-5 h-5 text-slate-400" />}
          />
          
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          {message && <p className="text-green-400 text-sm text-center">{message}</p>}

          <Button type="submit" isLoading={isLoading} className="w-full !py-3">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-slate-900/50 px-2 text-slate-400">OR</span>
          </div>
        </div>

        <Button
            variant="secondary"
            onClick={handleGoogleLogin}
            isLoading={isLoading}
            className="w-full !py-3"
        >
            <GoogleIcon className="w-5 h-5 text-white" />
            Sign in with Google
        </Button>
        
        <p className="mt-6 text-center text-sm text-slate-400">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => {
                setIsSignUp(!isSignUp);
                setError(null);
                setMessage(null);
            }}
            className="font-medium text-violet-400 hover:text-violet-300"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </Card>
    </div>
  );
};

export default Login;