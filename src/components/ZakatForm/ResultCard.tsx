import React from 'react';
import { formatCurrency } from '../../utils/formatters';

interface ResultCardProps {
  zakatAmount: number;
  netAssets: number;
}

export default function ResultCard({ zakatAmount, netAssets }: ResultCardProps) {
  return (
    <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Hasil Perhitungan</h2>
      <div className="space-y-2">
        <p className="text-gray-600">
          Total Aset Bersih: {formatCurrency(netAssets)}
        </p>
        <p className="text-xl font-bold text-emerald-600">
          Zakat yang Harus Dibayar: {formatCurrency(zakatAmount)}
        </p>
      </div>
    </div>
  );
}