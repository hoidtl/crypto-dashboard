export const formatPrice = (price) => {
  if (price === null || price === undefined) return 'N/A';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

export const formatPercentage = (percentage) => {
  if (percentage === null || percentage === undefined) return 'N/A';
  
  const formatted = percentage.toFixed(2);
  const sign = percentage >= 0 ? '+' : '';
  return `${sign}${formatted}%`;
};
