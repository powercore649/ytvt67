import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Support from './pages/Support';
import CookiePolicy from './pages/CookiePolicy';
import Music from './pages/Music';
import Economy from './pages/Economy';
import Games from './pages/Games';
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';
import Forbidden from './pages/Forbidden';
import ServerError from './pages/ServerError';
import ServiceUnavailable from './pages/ServiceUnavailable';
import NetworkError from './pages/NetworkError';
import Timeout from './pages/Timeout';
import ErrorBoundary from './components/ErrorBoundary';
import AIChat from './components/AIChat';
import { ToastProvider } from './components/ToastSystem';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ErrorBoundary>
      <ToastProvider>
        <div style={{
          backgroundColor: theme === 'dark' ? '#0a0e13' : '#f5f5f5',
          color: theme === 'dark' ? '#dbdee1' : '#2c2f33',
          minHeight: '100vh',
          fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
        }}>
          {/* AI Chat disponible partout */}
          <AIChat />

          <Routes>
            {/* Pages principales */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard theme={theme} setTheme={setTheme} />} />

            {/* Nouvelles pages */}
            <Route path="/music" element={<Music />} />
            <Route path="/economy" element={<Economy />} />
            <Route path="/games" element={<Games />} />
            <Route path="/stats" element={<Stats />} />

            {/* Pages légales */}
            <Route path="/terms" element={<TermsOfService theme={theme} />} />
            <Route path="/privacy" element={<PrivacyPolicy theme={theme} />} />
            <Route path="/faq" element={<FAQ theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
            <Route path="/support" element={<Support theme={theme} />} />
            <Route path="/cookies" element={<CookiePolicy theme={theme} />} />

            {/* Pages d'erreur */}
            <Route path="/error/401" element={<Unauthorized />} />
            <Route path="/error/403" element={<Forbidden />} />
            <Route path="/error/500" element={<ServerError />} />
            <Route path="/error/503" element={<ServiceUnavailable />} />
            <Route path="/error/network" element={<NetworkError />} />
            <Route path="/error/timeout" element={<Timeout />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
