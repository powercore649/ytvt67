import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ theme }) {
  return (
    <footer style={{
      background: theme === 'dark' 
        ? 'linear-gradient(180deg, #1a1f2e 0%, #0f1419 100%)'
        : 'linear-gradient(180deg, #f9f9f9 0%, #f0f0f0 100%)',
      borderTop: `1px solid ${theme === 'dark' ? '#2c2f33' : '#ddd'}`,
      padding: '40px 20px',
      marginTop: '60px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '30px',
        marginBottom: '30px'
      }}>
        {/* Column 1 */}
        <div>
          <h3 style={{ margin: '0 0 15px', color: '#5865F2', fontSize: '16px' }}>
            ⚡ Zenith Bot
          </h3>
          <p style={{ margin: '0 0 15px', color: theme === 'dark' ? '#949ba4' : '#666', fontSize: '13px' }}>
            Un bot Discord all-in-one avec modération, musique, économie et plus.
          </p>
        </div>

        {/* Column 2 - Product */}
        <div>
          <h4 style={{ margin: '0 0 15px', color: theme === 'dark' ? '#dbdee1' : '#2c2f33', fontSize: '14px' }}>
            Produit
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <Link to="/" style={{ color: '#5865F2', textDecoration: 'none' }}>Accueil</Link>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <Link to="/faq" style={{ color: '#5865F2', textDecoration: 'none' }}>FAQ</Link>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <Link to="/support" style={{ color: '#5865F2', textDecoration: 'none' }}>Support</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Legal */}
        <div>
          <h4 style={{ margin: '0 0 15px', color: theme === 'dark' ? '#dbdee1' : '#2c2f33', fontSize: '14px' }}>
            Légal
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <Link to="/terms" style={{ color: '#5865F2', textDecoration: 'none' }}>CGU</Link>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <Link to="/privacy" style={{ color: '#5865F2', textDecoration: 'none' }}>Confidentialité</Link>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <Link to="/cookies" style={{ color: '#5865F2', textDecoration: 'none' }}>Cookies</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Community */}
        <div>
          <h4 style={{ margin: '0 0 15px', color: theme === 'dark' ? '#dbdee1' : '#2c2f33', fontSize: '14px' }}>
            Communauté
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <Link to="/contact" style={{ color: '#5865F2', textDecoration: 'none' }}>Contact</Link>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="https://discord.gg/" style={{ color: '#5865F2', textDecoration: 'none' }}>Discord</a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="https://github.com/" style={{ color: '#5865F2', textDecoration: 'none' }}>GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div style={{
        borderTop: `1px solid ${theme === 'dark' ? '#2c2f33' : '#ddd'}`,
        paddingTop: '20px',
        textAlign: 'center',
        color: theme === 'dark' ? '#949ba4' : '#666',
        fontSize: '12px'
      }}>
        <p style={{ margin: 0 }}>
          © 2024 Zenith Bot. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
