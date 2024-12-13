import { ZakatFormData } from '../types/zakat';

export const ZAKAT_RATE = 0.025; // 2.5%

export const calculateZakat = (
  currentAssets: number,
  shortTermLiabilities: number,
  operationalCosts: number
): number => {
  const netAssets = currentAssets - shortTermLiabilities - operationalCosts;
  return Math.max(0, netAssets * ZAKAT_RATE);
};