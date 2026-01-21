import React from 'react';
import '../styles/Loading.css';

function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading crypto data...</p>
    </div>
  );
}

export default Loading;
