import React, { useState } from 'react';
import { bhsColors, documents } from '../../data/bhsData';
import { Download, User, Building, Target, CheckCircle } from 'lucide-react';

const LeadershipSection: React.FC = () => {
  const [activePage, setActivePage] = useState(0);

  const pages = [
    {
      title: 'CEO Message',
      content: (
        <div className="max-w-5xl mx-auto px-4 sm:px-0">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Top Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 sm:p-8 text-white">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                
                {/* CEO Image */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg flex-shrink-0">
                  <img 
                    src="https://bhs.global/wp-content/uploads/2025/03/BryanLim_BHSKINETIC_MAIN-768x853-1.jpg"
                    alt="CEO - Bryan Lim"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                    CEO Commitment Statement
                  </h2>
                  <p className="text-blue-100 text-sm sm:text-base">
                    BHS Kinetic Pte Ltd
                  </p>
                </div>

              </div>
            </div>
            
            {/* Content */}
            <div className="p-5 sm:p-8 space-y-6">
              <div className="prose max-w-none">
                
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  BHS Kinetic Pte Ltd ("BHS") recognizes that climate change, responsible labor practices, ethical conduct, and sustainable supply chain management are critical to long-term business resilience and stakeholder trust. In 2024, BHS strengthened its sustainability governance and improved GHG measurement practices, guided by the ISO 14000 series framework, while continuing to operate under our certified ISO 14001 Environmental Management System and enhancing transparency across environmental, labor, and ethics performance.
                </p>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-semibold mt-4">
                  BHS publicly supports internationally recognized sustainability principles, including:
                </p>
                
                <ul className="list-disc list-inside text-gray-700 space-y-2 my-4 text-base sm:text-lg">
                  <li>The Ten Principles of the United Nations Global Compact (UNGC)</li>
                </ul>
                
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  This report outlines our performance, commitments, and forward targets.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8">
                  
                  <div className="text-center p-5 sm:p-6 bg-green-50 rounded-xl">
                    <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                        3,860.96
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                        FY2025 Scope 1 + 2 tCO₂e
                    </div>
                  </div>

                  <div className="text-center p-5 sm:p-6 bg-blue-50 rounded-xl">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                        4,289.48
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                        FY2025 Scope 3 tCO₂e
                    </div>
                  </div>

                  <div className="text-center p-5 sm:p-6 bg-orange-50 rounded-xl">
                    <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">
                      ISO
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      14064-1 Aligned Reporting
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      title: 'Organizational Profile',
      content: (
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Left Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-8">
              
              <div className="flex items-center gap-4 mb-6">
                <Building className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Reporting Boundary
                </h3>
              </div>
              
              <div className="space-y-4">
                
                <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-2 text-sm sm:text-base">
                    Operational Control Approach
                  </h4>
                  <p className="text-green-700 text-xs sm:text-sm">
                    BHS Kinetic applies the operational control approach for GHG accounting and reporting.
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800 mb-2 text-sm sm:text-base">
                    Included Operations
                  </h4>
                  <ul className="text-blue-700 text-xs sm:text-sm space-y-1">
                    <li>• Fleet operations and mobile combustion</li>
                    <li>• Facility energy consumption</li>
                    <li>• Business travel and employee commuting</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-800 mb-2 text-sm sm:text-base">
                    Reporting Boundary
                  </h4>
                  <p className="text-orange-700 text-xs sm:text-sm">
                    External verification status: To be confirmed.
                  </p>
                </div>

              </div>
            </div>
            
            {/* Right Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-8">
              
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Historical Achievements 2024
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { metric: 'GHG Emissions', value: 'FY2024', description: 'Historical Scope 1+2 data retained separately' },
                  { metric: 'Female Workforce', value: '14.7%', description: 'Up from 9% in 2023' },
                  { metric: 'Safety Incidents', value: '-16.7%', description: 'Reduction from 42 to 35' },
                  { metric: 'Training Investment', value: 'SGD 38.6K', description: 'Employee development' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <span className="font-semibold text-sm sm:text-base">
                          {item.metric}
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-green-600">
                          {item.value}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-3">
                <a
                  href={documents.ghgInventory}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity w-full justify-center"
                  style={{ backgroundColor: bhsColors.esgGreen }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download GHG Emissions Inventory Report
                </a>

                <a
                  href={documents.iso14064}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-white text-sm sm:text-base font-medium hover:opacity-90 transition-opacity w-full justify-center"
                  style={{ backgroundColor: bhsColors.primaryDark }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download ISO 14064-1 Report
                </a>
              </div>
            </div>

          </div>
        </div>
      )
    }
  ];

  return (
    <section className="min-h-screen py-10 sm:py-14 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      
      {/* Background Icons - Hidden on Mobile */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 right-20">
          <User className="w-24 sm:w-32 h-24 sm:h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Building className="w-24 sm:w-32 h-24 sm:h-32 text-green-500" />
        </div>
        <div className="absolute top-1/2 right-1/3">
          <Target className="w-16 sm:w-24 h-16 sm:h-24 text-orange-500" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: bhsColors.primaryDark }}
          >
            Leadership & Governance
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to transparency, accountability, and sustainable business practices
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 flex flex-wrap justify-center gap-2">
            {pages.map((page, index) => (
              <button
                key={index}
                onClick={() => setActivePage(index)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activePage === index
                    ? 'text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={{
                  backgroundColor: activePage === index ? bhsColors.primaryDark : 'transparent'
                }}
              >
                {page.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="animate-fadeIn">
          {pages[activePage].content}
        </div>

      </div>
    </section>
  );
};

export default LeadershipSection;