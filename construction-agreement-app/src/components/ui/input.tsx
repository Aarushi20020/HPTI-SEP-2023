import React from 'react';

interface CustomInputProps {
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: string;
  required?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  placeholder,
  value,
  onChange,
  className = '',
  disabled = false,
  type = 'text',
  required = false
}) => {
  return (
    <div className="w-full">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`
          w-full px-4 py-3 border border-gray-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors duration-200
          placeholder-gray-400
          ${className}
        `}
      />
    </div>
  );
};

export default CustomInput;