import React from 'react';
import { bhsColors } from '../../data/bhsData';

interface DonutChartProps {
  data: { label: string; value: number; color?: string }[];
  title?: string;
  year?: string;
  size?: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ data, title, year, size = 150 }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  const colors = [
    bhsColors.esgGreen,
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FFEAA7',
    '#DDA0DD'
  ];

  const createPath = (percentage: number, cumulativePercentage: number) => {
    const startAngle = cumulativePercentage * 3.6;
    const endAngle = (cumulativePercentage + percentage) * 3.6;
    
    const startAngleRad = (startAngle - 90) * (Math.PI / 180);
    const endAngleRad = (endAngle - 90) * (Math.PI / 180);
    
    const largeArcFlag = percentage > 50 ? 1 : 0;
    
    const outerRadius = 40;
    const innerRadius = 25;
    
    const x1 = 50 + outerRadius * Math.cos(startAngleRad);
    const y1 = 50 + outerRadius * Math.sin(startAngleRad);
    const x2 = 50 + outerRadius * Math.cos(endAngleRad);
    const y2 = 50 + outerRadius * Math.sin(endAngleRad);
    
    const x3 = 50 + innerRadius * Math.cos(endAngleRad);
    const y3 = 50 + innerRadius * Math.sin(endAngleRad);
    const x4 = 50 + innerRadius * Math.cos(startAngleRad);
    const y4 = 50 + innerRadius * Math.sin(startAngleRad);
    
    return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
  };

  return (
    <div className="flex flex-col items-center px-2 sm:px-0">
      {title && <h4 className="text-xs sm:text-sm font-medium mb-2 text-gray-700 text-center">{title}</h4>}
      
      <div className="relative">
        <svg 
          width={Math.min(size, window.innerWidth - 80)} 
          height={Math.min(size, window.innerWidth - 80)} 
          viewBox="0 0 100 100"
          className="max-w-full"
        >
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const path = createPath(percentage, cumulativePercentage);
            const color = item.color || colors[index % colors.length];
            
            cumulativePercentage += percentage;
            
            return (
              <path
                key={index}
                d={path}
                fill={color}
                stroke="white"
                strokeWidth="1"
                className="hover:opacity-80 transition-opacity"
              />
            );
          })}
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            {year && (
              <div className="text-sm sm:text-base md:text-lg font-bold" style={{ color: bhsColors.primaryDark }}>
                {year}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-2 text-center grid grid-cols-2 sm:grid-cols-1 gap-1">
        {data.map((item, index) => (
          <div key={index} className="text-xs text-gray-600 text-center">
            {item.value.toFixed(1)}%
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;