import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Economy() {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(1250);

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

      <h1>💰 Système Économie</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #00C851 0%, #009640 100%)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontSize: '12px' }}>Solde Total</p>
          <h2 style={{ margin: '10px 0 0', fontSize: '32px' }}>💵 {balance}</h2>
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, #FF6B6B 0%, #cc5555 100%)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontSize: '12px' }}>Revenus Totaux</p>
          <h2 style={{ margin: '10px 0 0', fontSize: '32px' }}>📈 5,250</h2>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #5865F2 0%, #4752C4 100%)',
          padding: '20px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, fontSize: '12px' }}>Niveau</p>
          <h2 style={{ margin: '10px 0 0', fontSize: '32px' }}>⭐ 25</h2>
        </div>
      </div>

      <h2>⚡ Actions</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '10px',
        marginBottom: '30px'
      }}>
        <button style={{
          padding: '15px',
          background: '#5865F2',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          📅 Récompense Quotidienne
        </button>
        <button style={{
          padding: '15px',
          background: '#00C851',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          💼 Travailler
        </button>
        <button style={{
          padding: '15px',
          background: '#FF6B6B',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>
          🎰 Parier
        </button>
      </div>

      <h2>🏆 Classement</h2>
      <div style={{
        background: '#1a1f2e',
        borderRadius: '8px',
        padding: '15px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
          <span>🥇 User123</span>
          <span>💵 50,000</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
          <span>🥈 Vous</span>
          <span>💵 {balance}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>🥉 Gamer789</span>
          <span>💵 40,000</span>
        </div>
      </div>
    </div>
  );
}
