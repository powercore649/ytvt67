import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Music() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

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

      <h1>🎵 Lecteur Musique</h1>
      
      <div style={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        padding: '40px',
        borderRadius: '12px',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>🎶</div>
        <h2>Chanson en lecture</h2>
        <p>Artiste inconnu</p>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
          <button onClick={() => setIsPlaying(!isPlaying)} style={{
            padding: '10px 20px',
            background: '#5865F2',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            {isPlaying ? '⏸️ Pause' : '▶️ Play'}
          </button>
          <button style={{
            padding: '10px 20px',
            background: '#00C851',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            ⏭️ Suivant
          </button>
          <button style={{
            padding: '10px 20px',
            background: '#FF6B6B',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            ⏹️ Arrêter
          </button>
        </div>
      </div>

      <h2>📋 Queue</h2>
      <div style={{
        background: '#1a1f2e',
        border: '1px solid #2c2f33',
        borderRadius: '8px',
        padding: '15px'
      }}>
        <p>1. Chanson 1 - 3:45</p>
        <p>2. Chanson 2 - 4:12</p>
        <p>3. Chanson 3 - 3:30</p>
      </div>
    </div>
  );
}
