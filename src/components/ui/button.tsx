import React from 'react';

interface CustomButtonProps {
  name: string;
  onClick: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  name, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {name}
    </button>
  );
};

export default CustomButton;