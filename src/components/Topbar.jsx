import React, { useState } from 'react';

export default function Topbar({ theme, setTheme, title }) {
  const [notificationCount, setNotificationCount] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 20px',
      borderBottom: `1px solid ${theme === 'dark' ? '#2c2f33' : '#ddd'}`,
      backgroundColor: theme === 'dark' ? '#0f1419' : '#fff',
      boxShadow: theme === 'dark' ? '0 2px 10px rgba(0,0,0,0.3)' : '0 2px 5px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 99
    }}>
      <h1 style={{
        margin: 0,
        fontSize: '24px',
        fontWeight: '700',
        color: theme === 'dark' ? '#dbdee1' : '#2c2f33'
      }}>
        {title}
      </h1>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            style={{
              position: 'relative',
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              color: theme === 'dark' ? '#dbdee1' : '#2c2f33'
            }}
          >
            🔔
            {notificationCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-10px',
                background: '#FF6B6B',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {notificationCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <div style={{
              position: 'absolute',
              top: '40px',
              right: 0,
              background: theme === 'dark' ? '#1a1f2e' : '#fff',
              border: `1px solid ${theme === 'dark' ? '#2c2f33' : '#ddd'}`,
              borderRadius: '8px',
              padding: '10px',
              minWidth: '250px',
              boxShadow: theme === 'dark' ? '0 5px 20px rgba(0,0,0,0.4)' : '0 5px 15px rgba(0,0,0,0.1)',
              zIndex: 100
            }}>
              <div style={{ padding: '10px', borderBottom: `1px solid ${theme === 'dark' ? '#2c2f33' : '#eee'}` }}>
                <p style={{ margin: 0, fontWeight: 'bold', fontSize: '12px' }}>Notifications</p>
              </div>
              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                <div style={{ padding: '10px', borderBottom: `1px solid ${theme === 'dark' ? '#2c2f33' : '#eee'}` }}>
                  <p style={{ margin: 0, fontSize: '13px' }}>✅ Bot connecté</p>
                  <span style={{ fontSize: '11px', color: '#949ba4' }}>À l'instant</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          style={{
            padding: '8px 12px',
            background: theme === 'dark' ? '#1a1f2e' : '#f5f5f5',
            border: `1px solid ${theme === 'dark' ? '#2c2f33' : '#ddd'}`,
            borderRadius: '8px',
            color: theme === 'dark' ? '#dbdee1' : '#2c2f33',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'all 0.2s'
          }}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </div>
  );
}
