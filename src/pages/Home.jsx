import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer';

function parseJwt(token) {
  try { return JSON.parse(atob(token.split('.')[1])); } catch { return null; }
}

const FEATURES = [
  { icon: '🛡️', title: 'Auto Modération', desc: 'Filtres IA avancés détectant spam, raids & toxicité' },
  { icon: '📊', title: 'Analytics', desc: 'Métriques en temps réel & insights serveur' },
  { icon: '📋', title: 'Audit Logs', desc: 'Historique complet avec recherche avancée' },
  { icon: '👥', title: 'Gestion Membres', desc: 'Profils, listes bans & suivi sanctions' },
  { icon: '🔔', title: 'Notifications', desc: 'Alertes en temps réel & streams activité' },
  { icon: '⚙️', title: 'Paramètres', desc: 'Configurer règles & comportement automod' },
  { icon: '💻', title: 'Command Center', desc: 'Parcourir & gérer commandes bot' },
  { icon: '📈', title: 'Rapports', desc: 'Générer rapports modération détaillés' }
];

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const token = localStorage.getItem('zenith_token');
    if (token) {
      const payload = parseJwt(token);
      if (payload && payload.exp * 1000 > Date.now()) {
        setUser(payload);
      }
    }
  }, []);

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      window.location.href = '/api/auth/login';
    }
  };

  return (
    <div style={{
      backgroundColor: theme === 'dark' ? '#0a0e13' : '#f5f5f5',
      color: theme === 'dark' ? '#dbdee1' : '#2c2f33',
      minHeight: '100vh'
    }}>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        borderBottom: `1px solid ${theme === 'dark' ? '#2c2f33' : '#ddd'}`,
        backgroundColor: theme === 'dark' ? '#0f1419' : '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <h1 style={{ margin: 0, color: '#5865F2', fontSize: '28px', fontWeight: 'bold' }}>
          ⚡ Zenith Bot
        </h1>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/faq" style={{ color: '#5865F2', textDecoration: 'none', fontWeight: '500' }}>FAQ</Link>
          <Link to="/support" style={{ color: '#5865F2', textDecoration: 'none', fontWeight: '500' }}>Support</Link>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            style={{
              padding: '8px 12px',
              background: theme === 'dark' ? '#1a1f2e' : '#f5f5f5',
              border: `1px solid ${theme === 'dark' ? '#2c2f33' : '#ddd'}`,
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            onClick={handleGetStarted}
            style={{
              padding: '10px 20px',
              background: 'linear-gradient(135deg, #5865F2, #4752C4)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '700'
            }}
          >
            {user ? '📊 Dashboard' : '🚀 Démarrer'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '80px 40px',
        textAlign: 'center',
        background: theme === 'dark'
          ? 'linear-gradient(135deg, #0a0e13 0%, #1a1f2e 100%)'
          : 'linear-gradient(135deg, #f5f5f5 0%, #fff 100%)'
      }}>
        <h2 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 20px', color: '#5865F2' }}>
          Modération Discord All-In-One
        </h2>
        <p style={{ fontSize: '18px', color: theme === 'dark' ? '#949ba4' : '#666', marginBottom: '30px' }}>
          Zenith est le bot Discord ultime pour la modération, l'économie, la musique et bien plus!
        </p>
        <button
          onClick={handleGetStarted}
          style={{
            padding: '15px 40px',
            background: 'linear-gradient(135deg, #5865F2, #4752C4)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginRight: '15px'
          }}
        >
          🚀 Commencer Maintenant
        </button>
        <button
          onClick={() => navigate('/faq')}
          style={{
            padding: '15px 40px',
            background: 'transparent',
            color: '#5865F2',
            border: '2px solid #5865F2',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          📚 En savoir plus
        </button>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '50px', color: '#5865F2' }}>
          ✨ Fonctionnalités
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {FEATURES.map((feat, i) => (
            <div
              key={i}
              style={{
                background: theme === 'dark' ? '#1a1f2e' : '#fff',
                border: `1px solid ${theme === 'dark' ? '#2c2f33' : '#ddd'}`,
                padding: '30px',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#5865F2';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = theme === 'dark' 
                  ? '0 5px 20px rgba(88, 101, 242, 0.2)'
                  : '0 5px 15px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = theme === 'dark' ? '#2c2f33' : '#ddd';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>{feat.icon}</div>
              <h3 style={{ margin: '0 0 10px', color: '#5865F2' }}>{feat.title}</h3>
              <p style={{ margin: 0, color: theme === 'dark' ? '#949ba4' : '#666', fontSize: '13px' }}>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* New Features Section */}
      <section style={{
        padding: '80px 40px',
        background: theme === 'dark'
          ? 'linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%)'
          : 'linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', marginBottom: '50px', color: '#5865F2' }}>
          🎉 Nouvelles Fonctionnalités
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          <Link
            to="/music"
            style={{
              background: 'linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)',
              padding: '30px',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'white',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '150px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(156, 39, 176, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎵</div>
            <h3 style={{ margin: 0, fontSize: '18px' }}>Musique</h3>
          </Link>

          <Link
            to="/economy"
            style={{
              background: 'linear-gradient(135deg, #00C851 0%, #009640 100%)',
              padding: '30px',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'white',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '150px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 200, 81, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>💰</div>
            <h3 style={{ margin: 0, fontSize: '18px' }}>Économie</h3>
          </Link>

          <Link
            to="/games"
            style={{
              background: 'linear-gradient(135deg, #FF6B6B 0%, #cc5555 100%)',
              padding: '30px',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'white',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '150px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(255, 107, 107, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎮</div>
            <h3 style={{ margin: 0, fontSize: '18px' }}>Jeux</h3>
          </Link>

          <Link
            to="/stats"
            style={{
              background: 'linear-gradient(135deg, #5865F2 0%, #4752C4 100%)',
              padding: '30px',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'white',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '150px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(88, 101, 242, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>📊</div>
            <h3 style={{ margin: 0, fontSize: '18px' }}>Statistiques</h3>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '80px 40px',
        textAlign: 'center',
        background: theme === 'dark'
          ? 'linear-gradient(135deg, #1a1f2e 0%, #0a0e13 100%)'
          : 'linear-gradient(135deg, #f0f0f0 0%, #f5f5f5 100%)'
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#5865F2' }}>
          Prêt à améliorer votre serveur?
        </h2>
        <p style={{ fontSize: '16px', color: theme === 'dark' ? '#949ba4' : '#666', marginBottom: '30px' }}>
          Commencez dès maintenant avec Zenith et profitez de la meilleure expérience de modération Discord.
        </p>
        <button
          onClick={handleGetStarted}
          style={{
            padding: '15px 40px',
            background: 'linear-gradient(135deg, #5865F2, #4752C4)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          🚀 Ajouter le Bot
        </button>
      </section>

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}
