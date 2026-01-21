import React from 'react';
import { formatPrice, formatPercentage } from '../utils/formatters';
import '../styles/CoinCard.css';

function CoinCard({ coin, rank }) {
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <div className="coin-card">
      <div className="card-header">
        <div className="coin-rank">#{rank}</div>
        <img src={coin.image} alt={coin.name} className="coin-logo" />
        <div className="coin-details">
          <h3 className="coin-name">{coin.name}</h3>
          <span className="coin-symbol">{coin.symbol.toUpperCase()}</span>
        </div>
      </div>
      
      <div className="card-body">
        <div className="price-section">
          <div className="label">Price</div>
          <div className="value price">{formatPrice(coin.current_price)}</div>
        </div>
        
        <div className="change-section">
          <div className="label">24h Change</div>
          <div className={`value ${isPositive ? 'positive' : 'negative'}`}>
            {formatPercentage(coin.price_change_percentage_24h)}
          </div>
        </div>
        
        <div className="market-cap-section">
          <div className="label">Market Cap</div>
          <div className="value">{formatPrice(coin.market_cap)}</div>
        </div>
      </div>
    </div>
  );
}

export default CoinCard;
