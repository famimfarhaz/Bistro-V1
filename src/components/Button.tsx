import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-white';
  
  const variants = {
    primary: 'gradient-bg text-white hover:shadow-lg glow-orange premium-shadow',
    secondary: 'bg-white text-gray-800 hover:bg-gray-50 premium-shadow border border-gray-200',
    outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white premium-glassmorphism',
    glass: 'premium-glassmorphism text-gray-800 hover:elevated-glassmorphism',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4.5 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        y: -2,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: 'spring',
        stiffness: 400,
        damping: 17 
      }}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon className="w-5 h-5 mr-2.5" />}
      {children}
    </motion.button>
  );
};

export default Button;