import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'elevated' | 'testimonial' | 'pricing';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  variant = 'default'
}) => {
  const variants = {
    default: 'premium-glassmorphism',
    elevated: 'elevated-glassmorphism',
    testimonial: 'testimonial-glassmorphism',
    pricing: 'premium-glassmorphism hover:elevated-glassmorphism',
  };

  const hoverEffects = hover ? {
    y: -8,
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  } : {};

  return (
    <motion.div
      whileHover={hoverEffects}
      transition={{ duration: 0.3 }}
      className={`${variants[variant]} rounded-3xl p-8 ${hover ? 'hover:glow-orange' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;