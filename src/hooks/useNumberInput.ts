import { useState, useCallback } from 'react';
import { 
  formatWithDotSeparator, 
  parseFormattedNumber, 
  calculateCursorPosition 
} from '../utils/numberFormat';

interface UseNumberInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function useNumberInput({ value, onChange }: UseNumberInputProps) {
  const [displayValue, setDisplayValue] = useState(formatWithDotSeparator(value));

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement>,
    inputRef: React.RefObject<HTMLInputElement>
  ) => {
    const input = e.target;
    const cursorPosition = input.selectionStart || 0;
    
    // Parse and format the new value
    const numericValue = parseFormattedNumber(input.value);
    const formattedValue = formatWithDotSeparator(numericValue);
    
    // Update the display value
    setDisplayValue(formattedValue);
    
    // Calculate and set the new cursor position
    const newPosition = calculateCursorPosition(input.value, formattedValue, cursorPosition);
    
    // Trigger the onChange callback with the numeric value
    onChange(numericValue);
    
    // Update cursor position after React render
    requestAnimationFrame(() => {
      if (inputRef.current) {
        inputRef.current.setSelectionRange(newPosition, newPosition);
      }
    });
  }, [onChange]);

  return {
    displayValue,
    handleChange
  };
}