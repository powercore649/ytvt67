import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Stats() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <button onClick={() => navigate('/dashboard')} style={{
        marginBottom: '20px',
        padding: '10px 15px',
        background: '#5865F2',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer'
      }}>
        ← Retour au Dashboard
      </button>

      <h1>📊 Statistiques du Bot</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #5865F2 0%, #4752C4 100%)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontSize: '12px' }}>Serveurs Totaux</p>
          <h2 style={{ margin: '10px 0 0' }}>1,245</h2>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #00C851 0%, #009640 100%)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontSize: '12px' }}>Utilisateurs</p>
          <h2 style={{ margin: '10px 0 0' }}>125,430</h2>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #FF6B6B 0%, #cc5555 100%)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontSize: '12px' }}>Commandes/jour</p>
          <h2 style={{ margin: '10px 0 0' }}>2.5M</h2>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #FFD700 0%, #cc9900 100%)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontSize: '12px' }}>Disponibilité</p>
          <h2 style={{ margin: '10px 0 0' }}>99.9%</h2>
        </div>
      </div>

      <h2>📈 Utilisation des Commandes</h2>
      <div style={{
        background: '#1a1f2e',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '30px'
      }}>
        {[
          { name: 'Modération', percent: 35, color: '#FF6B6B' },
          { name: 'Amusement', percent: 28, color: '#5865F2' },
          { name: 'Économie', percent: 20, color: '#00C851' },
          { name: 'Musique', percent: 17, color: '#9C27B0' }
        ].map((item, i) => (
          <div key={i} style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span>{item.name}</span>
              <span>{item.percent}%</span>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.3)', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{
                background: item.color,
                height: '100%',
                width: `${item.percent}%`
              }} />
            </div>
          </div>
        ))}
      </div>

      <h2>🎯 Commandes Populaires</h2>
      <div style={{
        background: '#1a1f2e',
        borderRadius: '8px',
        padding: '15px'
      }}>
        {[
          { name: '/ban', count: 125430 },
          { name: '/warn', count: 98500 },
          { name: '/play', count: 87200 },
          { name: '/joke', count: 76500 },
          { name: '/daily', count: 65200 }
        ].map((cmd, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
            borderBottom: '1px solid #333',
            paddingBottom: '10px'
          }}>
            <span>{i + 1}. {cmd.name}</span>
            <span>{cmd.count.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
