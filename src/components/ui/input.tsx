import React from 'react';

interface CustomInputProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  className = ''
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label 
        htmlFor={name} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
      />
    </div>
  );
};

export default CustomInput;