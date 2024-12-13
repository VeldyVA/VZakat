import { useState, FormEvent } from 'react';
import { calculateZakat } from '../utils/calculations';
import { formatWithDotSeparator } from '../utils/numberFormat';
import { ZakatFormData } from '../types/zakat';

export function useZakatCalculator() {
  const [formData, setFormData] = useState<ZakatFormData>({
    currentAssets: 0,
    shortTermLiabilities: 0,
    operationalCosts: 0
  });

  const [displayValues, setDisplayValues] = useState({
    currentAssets: '',
    shortTermLiabilities: '',
    operationalCosts: ''
  });

  const [zakatAmount, setZakatAmount] = useState<number | null>(null);

  const handleInputChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    const numericValue = parseInt(value.replace(/\./g, ''), 10) || 0;
    
    // Update the numeric value in formData
    setFormData(prev => ({
      ...prev,
      [name]: numericValue
    }));

    // Update the display value with thousand separator
    setDisplayValues(prev => ({
      ...prev,
      [name]: formatWithDotSeparator(numericValue)
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = calculateZakat(
      formData.currentAssets,
      formData.shortTermLiabilities,
      formData.operationalCosts
    );
    setZakatAmount(result);
  };

  const netAssets = formData.currentAssets - formData.shortTermLiabilities - formData.operationalCosts;

  return {
    formData,
    displayValues,
    zakatAmount,
    handleInputChange,
    handleSubmit,
    netAssets
  };
}