import React from 'react';
import '../styles/ErrorMessage.css';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <h3>Oops! Something went wrong</h3>
      <p>{message}</p>
      <button className="retry-btn" onClick={onRetry}>
        Try Again
      </button>
    </div>
  );
}

export default ErrorMessage;
