import React, { useState } from 'react';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import './styles/App.css';

/**
 * Component này để TEST các states:
 * - Loading state
 * - Error state
 * 
 * Cách dùng:
 * 1. Import vào App.js tạm thời
 * 2. Render <TestStates /> thay vì component chính
 * 3. Click các nút để xem từng state
 */
function TestStates() {
  const [currentState, setCurrentState] = useState('normal');

  return (
    <div className="app">
      <div style={{ 
        padding: '40px', 
        textAlign: 'center',
        background: 'white',
        margin: '20px',
        borderRadius: '12px'
      }}>
        <h1 style={{ marginBottom: '30px' }}>🧪 Test States</h1>
        
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
          <button 
            onClick={() => setCurrentState('loading')}
            style={{
              padding: '12px 24px',
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Show Loading
          </button>
          
          <button 
            onClick={() => setCurrentState('error')}
            style={{
              padding: '12px 24px',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Show Error
          </button>
          
          <button 
            onClick={() => setCurrentState('normal')}
            style={{
              padding: '12px 24px',
              background: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600'
            }}
          >
            Hide All
          </button>
        </div>

        <div style={{ 
          minHeight: '200px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '12px',
          padding: '20px'
        }}>
          {currentState === 'loading' && <Loading />}
          {currentState === 'error' && (
            <ErrorMessage 
              message="Failed to fetch cryptocurrency data. Please check your internet connection."
              onRetry={() => alert('Retry clicked! Trong app thật sẽ gọi lại API.')}
            />
          )}
          {currentState === 'normal' && (
            <div style={{ color: 'white', padding: '60px' }}>
              <h2>Click các nút ở trên để test Loading và Error states</h2>
            </div>
          )}
        </div>

        <div style={{ 
          marginTop: '30px', 
          padding: '20px', 
          background: '#f3f4f6', 
          borderRadius: '8px',
          textAlign: 'left'
        }}>
          <h3>📋 Hướng dẫn test trong App thật:</h3>
          <ol style={{ lineHeight: '1.8' }}>
            <li><strong>Test Loading:</strong> DevTools → Network → Slow 3G → Click Refresh</li>
            <li><strong>Test Error:</strong> Tắt WiFi → Click Refresh → Bật lại WiFi → Click "Try Again"</li>
            <li><strong>Hoặc:</strong> Sửa API_URL thành URL sai trong App.js</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TestStates;
