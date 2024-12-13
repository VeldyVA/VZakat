import React from 'react';

interface NumberInputProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  placeholder?: string;
}

export function NumberInput({
  id,
  name,
  label,
  value,
  onChange,
  placeholder
}: NumberInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        inputMode="numeric"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
      />
    </div>
  );
}