export const formatCurrency = (amount: number): string => {
  const formattedNumber = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
  
  return formattedNumber.replace('IDR', 'Rp ');
};