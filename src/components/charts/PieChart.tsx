import React from 'react';
import { bhsColors } from '../../data/bhsData';

interface PieChartProps {
  data: { label: string; value: number; color?: string }[];
  title?: string;
  size?: number;
}

const PieChart: React.FC<PieChartProps> = ({ data, title, size = 250 }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  const createPath = (percentage: number, cumulativePercentage: number) => {
    const startAngle = cumulativePercentage * 3.6;
    const endAngle = (cumulativePercentage + percentage) * 3.6;
    
    const startAngleRad = (startAngle - 90) * (Math.PI / 180);
    const endAngleRad = (endAngle - 90) * (Math.PI / 180);
    
    const largeArcFlag = percentage > 50 ? 1 : 0;
    const radius = 35;
    
    const x1 = 50 + radius * Math.cos(startAngleRad);
    const y1 = 50 + radius * Math.sin(startAngleRad);
    const x2 = 50 + radius * Math.cos(endAngleRad);
    const y2 = 50 + radius * Math.sin(endAngleRad);
    
    return `M 50 50 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  return (
    <div className="flex flex-col items-center w-full px-2 sm:px-0">
      {title && <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800 text-center">{title}</h3>}
      
      <div className="relative mb-4 sm:mb-6">
        <svg 
          width={Math.min(size, window.innerWidth - 40)} 
          height={Math.min(size, window.innerWidth - 40)} 
          viewBox="0 0 100 100" 
          className="transform -rotate-90 drop-shadow-lg max-w-full"
        >
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const path = createPath(percentage, cumulativePercentage);
            const color = item.color || (index === 0 ? bhsColors.esgGreen : bhsColors.accentOrange);
            
            cumulativePercentage += percentage;
            
            return (
              <path
                key={index}
                d={path}
                fill={color}
                stroke="white"
                strokeWidth="2"
                className="hover:opacity-90 transition-all duration-300"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              />
            );
          })}
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center transform rotate-90">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1" style={{ color: bhsColors.primaryDark }}>
              {total.toLocaleString()}
            </div>
            <div className="text-xs sm:text-sm font-medium text-gray-600">tCO₂e</div>
          </div>
        </div>
      </div>
      
      <div className="w-full space-y-2 sm:space-y-3">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          const color = item.color || (index === 0 ? bhsColors.esgGreen : bhsColors.accentOrange);
          
          return (
            <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div 
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-sm flex-shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span className="font-semibold text-gray-800 text-sm sm:text-base truncate">{item.label}</span>
              </div>
              <div className="text-right flex-shrink-0 ml-2">
                <div className="font-bold text-sm sm:text-base md:text-lg" style={{ color: color }}>
                  {item.value.toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">{percentage.toFixed(1)}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieChart;