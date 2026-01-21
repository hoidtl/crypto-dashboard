import React from 'react';
import '../styles/Header.css';

function Header({ onRefresh, darkMode, onToggleDarkMode }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <span className="crypto-icon">₿</span>
          Crypto Dashboard
        </h1>
        <div className="header-actions">
          <button 
            className="theme-toggle"
            onClick={onToggleDarkMode}
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button 
            className="refresh-btn"
            onClick={onRefresh}
            title="Refresh data"
          >
            🔄 Refresh
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
