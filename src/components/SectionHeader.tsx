import React from 'react';

interface SectionHeaderProps {
  title: string;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, light = false }) => {
  return (
    <div className="relative">
      <h2 className={`text-2xl font-bold ${light ? 'text-white' : 'text-gray-900'} mb-2`}>{title}</h2>
      <div className={`h-1 w-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full ${light ? 'opacity-90' : ''}`}></div>
    </div>
  );
}

export default SectionHeader;