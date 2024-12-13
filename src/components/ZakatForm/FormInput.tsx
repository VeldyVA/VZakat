import React, { useRef } from 'react';
import { useNumberInput } from '../../hooks/useNumberInput';

interface FormInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function FormInput({
  id,
  label,
  value,
  onChange,
  placeholder
}: FormInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { displayValue, handleChange } = useNumberInput({
    onChange: (newValue) => {
      onChange({
        target: { name: id, value: newValue.toString() }
      } as React.ChangeEvent<HTMLInputElement>);
    },
    initialValue: value
  });

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        id={id}
        name={id}
        value={displayValue}
        onChange={(e) => handleChange(e, inputRef)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        placeholder={placeholder}
      />
    </div>
  );
}