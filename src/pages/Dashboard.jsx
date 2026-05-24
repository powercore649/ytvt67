import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Overview from '../components/Overview';
import Moderation from '../components/Moderation';
import Analytics from '../components/Analytics';
import Members from '../components/Members';
import Notifications from '../components/Notifications';
import AuditLog from '../components/AuditLog';
import Settings from '../components/Settings';
import Reports from '../components/Reports';
import CommandCenter from '../components/CommandCenter';
import BotStatus from '../components/BotStatus';
import AccountManager from '../components/AccountManager';
import Docs from '../components/Docs';

export default function Dashboard({ theme, setTheme }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const pages = {
    overview: <Overview />,
    moderation: <Moderation />,
    analytics: <Analytics />,
    members: <Members />,
    notifications: <Notifications />,
    audit: <AuditLog />,
    settings: <Settings />,
    reports: <Reports />,
    commands: <CommandCenter />,
    status: <BotStatus />,
    account: <AccountManager />,
    docs: <Docs />
  };

  const pageTitle = {
    overview: '📊 Accueil',
    moderation: '🛡️ Modération',
    analytics: '📈 Analytics',
    members: '👥 Membres',
    notifications: '🔔 Notifications',
    audit: '📋 Audit Log',
    settings: '⚙️ Paramètres',
    reports: '📄 Rapports',
    commands: '💻 Commandes',
    status: '🟢 Statut Bot',
    account: '👤 Compte',
    docs: '📚 Documentation'
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: theme === 'dark' ? '#0a0e13' : '#f5f5f5'
    }}>
      <Sidebar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        theme={theme}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: sidebarOpen ? '250px' : '80px',
        transition: 'margin 0.3s ease'
      }}>
        <Topbar 
          theme={theme}
          setTheme={setTheme}
          title={pageTitle[currentPage] || 'Dashboard'}
        />
        
        <div style={{
          flex: 1,
          overflow: 'auto',
          padding: '20px',
          backgroundColor: theme === 'dark' ? '#0a0e13' : '#f5f5f5'
        }}>
          {/* Navigation aux nouvelles pages */}
          <div style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => navigate('/music')}
              style={{
                padding: '8px 15px',
                background: '#9C27B0',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '600'
              }}
            >
              🎵 Musique
            </button>
            <button
              onClick={() => navigate('/economy')}
              style={{
                padding: '8px 15px',
                background: '#00C851',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '600'
              }}
            >
              💰 Économie
            </button>
            <button
              onClick={() => navigate('/games')}
              style={{
                padding: '8px 15px',
                background: '#FF6B6B',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '600'
              }}
            >
              🎮 Jeux
            </button>
            <button
              onClick={() => navigate('/stats')}
              style={{
                padding: '8px 15px',
                background: '#5865F2',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: '600'
              }}
            >
              📊 Statistiques
            </button>
          </div>

          {/* Contenu */}
          {pages[currentPage]}
        </div>
      </div>
    </div>
  );
}
