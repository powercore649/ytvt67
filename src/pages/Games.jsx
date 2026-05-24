import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Games() {
  const navigate = useNavigate();
  const [activeGame, setActiveGame] = useState(null);

  const games = [
    { name: 'Devinez le nombre', emoji: '🎯', desc: 'Devinez un nombre de 1 à 100', stats: '45 joués' },
    { name: 'Pierre-Papier-Ciseaux', emoji: '✂️', desc: 'Le classique RPS', stats: '120 joués' },
    { name: 'Trivia', emoji: '🧠', desc: 'Testez vos connaissances', stats: '78 joués' },
    { name: 'Pendu', emoji: '🎮', desc: 'Devinez le mot', stats: '32 joués' }
  ];

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

      <h1>🎮 Jeux</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '15px',
        marginBottom: '30px'
      }}>
        {games.map((game, i) => (
          <div 
            key={i}
            onClick={() => setActiveGame(game.name)}
            style={{
              background: 'linear-gradient(135deg, #5865F2 0%, #4752C4 100%)',
              padding: '20px',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s'
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
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>{game.emoji}</div>
            <h3 style={{ margin: '0 0 10px' }}>{game.name}</h3>
            <p style={{ margin: '0 0 10px', color: '#a0c4ff', fontSize: '12px' }}>{game.desc}</p>
            <p style={{ margin: 0, color: '#a0c4ff', fontSize: '12px' }}>📊 {game.stats}</p>
          </div>
        ))}
      </div>

      {activeGame && (
        <div style={{
          background: '#1a1f2e',
          padding: '20px',
          borderRadius: '12px',
          marginBottom: '30px'
        }}>
          <h2>🎮 {activeGame}</h2>
          <p style={{ color: '#949ba4' }}>Interface du jeu ici...</p>
          <button style={{
            padding: '10px 20px',
            background: '#5865F2',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '10px'
          }}>
            ▶️ Commencer le jeu
          </button>
        </div>
      )}

      <h2>📊 Statistiques</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '15px'
      }}>
        <div style={{
          background: '#1a1f2e',
          padding: '15px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, color: '#949ba4' }}>Total Joué</p>
          <h3 style={{ margin: '10px 0 0' }}>275</h3>
        </div>
        <div style={{
          background: '#1a1f2e',
          padding: '15px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, color: '#949ba4' }}>Taux Victoire</p>
          <h3 style={{ margin: '10px 0 0' }}>62%</h3>
        </div>
        <div style={{
          background: '#1a1f2e',
          padding: '15px',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0, color: '#949ba4' }}>Total Victoires</p>
          <h3 style={{ margin: '10px 0 0' }}>170</h3>
        </div>
      </div>
    </div>
  );
}
