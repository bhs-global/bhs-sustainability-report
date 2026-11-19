import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { ChevronRight, TrendingDown, TrendingUp } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle?: string;
  trend?: number;
  target?: number;
  onClick: () => void;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  value,
  subtitle,
  trend,
  target,
  onClick
}) => {
  const getTrendColor = (trend?: number) => {
    if (trend === undefined) return 'text-gray-500';
    return trend >= 0 ? 'text-green-500' : 'text-red-500';
  };

  const formatTrend = (trend?: number) => {
    if (trend === undefined) return null;
    return `${trend >= 0 ? '+' : ''}${trend}%`;
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 p-6 cursor-pointer group"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4 flex-1">
          <div className="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
            <Icon className="w-6 h-6 text-green-600" />
          </div>
          <div className="space-y-1 flex-1">
            <h3 className="text-sm font-medium text-gray-600">{title}</h3>
            <p className="text-xl font-bold text-gray-900">{value}</p>
            {subtitle && (
              <p className="text-sm text-gray-500">{subtitle}</p>
            )}
            {trend !== undefined && (
              <div className="flex items-center gap-2 mt-2">
                {trend >= 0 ? (
                  <TrendingUp className={`w-4 h-4 ${getTrendColor(trend)}`} />
                ) : (
                  <TrendingDown className={`w-4 h-4 ${getTrendColor(trend)}`} />
                )}
                <span className={`text-sm font-medium ${getTrendColor(trend)}`}>
                  {formatTrend(trend)}
                </span>
                {target !== undefined && (
                  <span className="text-sm text-gray-500">
                    / Target: {target}%
                  </span>
                )}
              </div>
            )}
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
        </div>
      </div>
    </div>
  );
}

export default MetricCard;