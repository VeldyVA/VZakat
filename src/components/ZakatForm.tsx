import React from 'react';
import { Calculator } from 'lucide-react';
import { NumberInput } from './NumberInput';
import { useZakatCalculator } from '../hooks/useZakatCalculator';
import { formatCurrency } from '../utils/formatters';

export default function ZakatForm() {
  const {
    displayValues,
    zakatAmount,
    handleInputChange,
    handleSubmit,
    netAssets
  } = useZakatCalculator();

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-8 h-8 text-emerald-600" />
        <h1 className="text-2xl font-bold text-gray-800">Kalkulator Zakat Perusahaan</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <NumberInput
            id="currentAssets"
            name="currentAssets"
            label="Aset Lancar (Rp)"
            value={displayValues.currentAssets}
            onChange={handleInputChange}
            placeholder="Masukkan aset lancar"
          />

          <NumberInput
            id="shortTermLiabilities"
            name="shortTermLiabilities"
            label="Kewajiban Jangka Pendek (Rp)"
            value={displayValues.shortTermLiabilities}
            onChange={handleInputChange}
            placeholder="Masukkan kewajiban jangka pendek"
          />

          <NumberInput
            id="operationalCosts"
            name="operationalCosts"
            label="Biaya Operasional (Rp)"
            value={displayValues.operationalCosts}
            onChange={handleInputChange}
            placeholder="Masukkan biaya operasional"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-200"
        >
          Hitung Zakat
        </button>
      </form>

      {zakatAmount !== null && (
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
      )}
    </div>
  );
}