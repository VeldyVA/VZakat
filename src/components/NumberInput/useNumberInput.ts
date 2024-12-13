import { useState, useEffect, ChangeEvent } from 'react';

interface UseNumberInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function useNumberInput({ value, onChange }: UseNumberInputProps) {
  const [inputValue, setInputValue] = useState(formatValue(value));

  useEffect(() => {
    setInputValue(formatValue(value));
  }, [value]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    
    // Remove any non-digit characters
    newValue = newValue.replace(/[^\d]/g, '');
    
    // Convert to number
    const numericValue = newValue ? parseInt(newValue, 10) : 0;
    
    // Format with thousand separators
    const formattedValue = formatValue(numericValue);
    
    setInputValue(formattedValue);
    onChange(numericValue);
  };

  return {
    inputValue,
    handleInputChange
  };
}

function formatValue(value: number): string {
  if (!value) return '';
  
  // Convert number to string and split into groups of 3 digits from the right
  const parts = value.toString().split('.');
  const wholePart = parts[0];
  const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  return formattedWholePart;
}