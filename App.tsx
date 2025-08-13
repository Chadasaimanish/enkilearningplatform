import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LanguageSelector from './components/LanguageSelector';
import LearningPath from './components/LearningPath';
import LessonView from './components/LessonView';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AuthLayout from './components/AuthLayout';
import { useAuth } from './hooks/useAuth';

const App: React.FC = () => {
  const { session } = useAuth();

  return (
    <div className="min-h-screen">
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AuthLayout />}>
              <Route path="/" element={<LanguageSelector />} />
              <Route path="/path" element={<LearningPath />} />
              <Route path="/lesson/:lessonId" element={<LessonView />} />
            </Route>
          </Route>
          
          {/* Redirect root based on auth state */}
          <Route path="*" element={<Navigate to={session ? "/" : "/login"} replace />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;