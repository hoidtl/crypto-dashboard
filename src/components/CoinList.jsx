import React from 'react';
import CoinCard from './CoinCard';
import { formatPrice, formatPercentage } from '../utils/formatters';
import '../styles/CoinList.css';

function CoinList({ coins, onSort, sortConfig }) {
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return '⇅';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  if (coins.length === 0) {
    return (
      <div className="no-results">
        <p>No coins found</p>
      </div>
    );
  }

  return (
    <div className="coin-list">
      {/* Desktop Table View */}
      <div className="table-view">
        <table className="coin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Coin</th>
              <th 
                className="sortable"
                onClick={() => onSort('current_price')}
              >
                Price {getSortIcon('current_price')}
              </th>
              <th 
                className="sortable"
                onClick={() => onSort('price_change_percentage_24h')}
              >
                24h Change {getSortIcon('price_change_percentage_24h')}
              </th>
              <th 
                className="sortable"
                onClick={() => onSort('market_cap')}
              >
                Market Cap {getSortIcon('market_cap')}
              </th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => (
              <tr key={coin.id}>
                <td>{index + 1}</td>
                <td className="coin-info">
                  <img src={coin.image} alt={coin.name} className="coin-logo" />
                  <div>
                    <div className="coin-name">{coin.name}</div>
                    <div className="coin-symbol">{coin.symbol.toUpperCase()}</div>
                  </div>
                </td>
                <td className="price">{formatPrice(coin.current_price)}</td>
                <td className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                  {formatPercentage(coin.price_change_percentage_24h)}
                </td>
                <td>{formatPrice(coin.market_cap)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="card-view">
        {coins.map((coin, index) => (
          <CoinCard key={coin.id} coin={coin} rank={index + 1} />
        ))}
      </div>
    </div>
  );
}

export default CoinList;
