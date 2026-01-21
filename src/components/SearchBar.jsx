import React from 'react';
import '../styles/SearchBar.css';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Search by name or symbol..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
      {searchTerm && (
        <button 
          className="clear-btn"
          onClick={() => onSearchChange('')}
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
