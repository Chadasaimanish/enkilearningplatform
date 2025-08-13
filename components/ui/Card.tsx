import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  const baseClasses = 'bg-slate-900/50 border border-slate-800 rounded-xl shadow-lg backdrop-blur-sm';
  const interactiveClasses = onClick ? 'cursor-pointer transition-all duration-300 hover:border-violet-500 hover:shadow-violet-500/20 hover:-translate-y-1' : '';

  return (
    <div className={`${baseClasses} ${interactiveClasses} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;