import React from 'react';
import { bhsColors, kpiCards } from '../../data/bhsData';
import { TrendingUp, TrendingDown, Award, Target, Users, Leaf, ArrowRight } from 'lucide-react';

interface HomeSectionProps {
  onNavigate?: () => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 sm:px-0">
      {/* Background Images - Magazine Style */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-5 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 bg-green-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-5 sm:right-10 w-40 h-40 sm:w-80 sm:h-80 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-orange-100 rounded-full blur-3xl"></div>
      </div>

      {/* Sustainability Icons/Images */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-5 sm:left-20 opacity-10">
          <Leaf className="w-16 h-16 sm:w-32 sm:h-32 text-green-500" />
        </div>
        <div className="absolute bottom-32 right-5 sm:right-20 opacity-10">
          <Target className="w-16 h-16 sm:w-32 sm:h-32 text-blue-500" />
        </div>
        <div className="absolute top-1/3 right-8 sm:right-32 opacity-10">
          <Users className="w-12 h-12 sm:w-24 sm:h-24 text-orange-500" />
        </div>
        <div className="absolute bottom-1/3 left-8 sm:left-32 opacity-10">
          <Award className="w-12 h-12 sm:w-24 sm:h-24 text-green-500" />
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 w-full">
          {/* Magazine Cover Style */}
          <div className="text-center">
            {/* Main Title */}
            <div className="mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight" style={{ color: bhsColors.primaryDark }}>
                Delivering Sustainable
              </h1>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 leading-tight" style={{ color: bhsColors.accentOrange }}>
                Logistics Excellence
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-3 sm:mb-4 font-light tracking-wide">
                Environmental, Social & Governance Report
              </div>
              <div className="text-base sm:text-lg md:text-xl text-gray-600 font-light">
                BHS Kinetic Pte Ltd
              </div>
              <div className="text-sm sm:text-base md:text-lg text-gray-500 mt-2">
                Reporting Year: 2024
              </div>
            </div>

            {/* View Button */}
            {onNavigate && (
              <button
                onClick={onNavigate}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: bhsColors.primaryDark }}
              >
                View Report
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;