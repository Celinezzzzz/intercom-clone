import React from 'react';
import './Button.scss';

type ButtonProps = {
  label: string;
  type: 'outline' | 'primary';
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, type, onClick }) => {
  return (
    <button className={`button button--${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
