import React from 'react';
import { bhsColors } from '../data/bhsData';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'environment', label: 'Environment' },
    { id: 'social', label: 'Social' },
    { id: 'governance', label: 'Governance' },
    { id: 'assurance', label: 'Assurance & Roadmap' }
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-200/50 shadow-sm bg-white/95"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-center min-h-[3.5rem] sm:h-16">
          {/* Navigation Items */}
          <div className="w-full">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/80'
                  }`}
                  style={{
                    backgroundColor: activeSection === item.id ? bhsColors.primaryDark : 'transparent'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Navigation */}
            <div className="lg:hidden">
              <div className="flex flex-wrap gap-1 justify-center py-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`px-2 py-1 rounded text-xs font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white shadow-md'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/80'
                    }`}
                    style={{
                      backgroundColor: activeSection === item.id ? bhsColors.primaryDark : 'transparent'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;