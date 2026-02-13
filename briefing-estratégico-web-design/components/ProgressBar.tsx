
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full bg-slate-800 rounded-full h-1.5 mb-8 overflow-hidden">
      <div 
        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
