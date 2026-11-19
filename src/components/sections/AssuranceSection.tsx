import React, { useState } from 'react';
import { bhsColors, sustainabilityTargets, documents } from '../../data/bhsData';
import { Download, Award, Target, CheckCircle2, FileCheck, Calendar } from 'lucide-react';

const AssuranceSection: React.FC = () => {
  const [activePage, setActivePage] = useState(0);

  const pages = [
    {
      title: 'Methodology & Verification',
      content: (
        <div className="max-w-6xl mx-auto space-y-6 print:space-y-4 px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-6 print:p-4 print:page-break-inside-avoid">
            <div className="flex items-center gap-4 mb-6 print:mb-4">
              <Target className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 print:w-6 print:h-6" />
              <h3 className="text-xl sm:text-2xl font-bold print:text-xl">
                Quality Assurance
              </h3>
            </div>
            
            <div className="space-y-4 print:space-y-3">
              {[
                { process: 'Data Collection', status: 'Implemented', progress: 100 },
                { process: 'Quality Control', status: 'Ongoing', progress: 85 },
                { process: 'Internal Review', status: 'Completed', progress: 100 },
                { process: 'External Verification', status: 'To be confirmed', progress: 0 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <span className="font-medium text-sm sm:text-base print:text-sm">
                      {item.process}
                    </span>
                    <span className={`text-xs sm:text-sm px-2 py-1 rounded-full print:text-xs ${
                      item.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      item.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                      item.status === 'Implemented' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 print:h-1.5">
                    <div
                      className="h-2 rounded-full transition-all duration-500 print:h-1.5"
                      style={{
                        width: `${item.progress}%`,
                        backgroundColor: bhsColors.esgGreen
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-xl print:mt-4 print:p-3">
              <p className="text-xs sm:text-sm text-gray-600 print:text-xs">
                <strong>External verification status: To be confirmed.</strong> FY2025 inventory methodology, assumptions and activity data are disclosed for review. External verification has not been established by the available evidence.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ['Organisational boundary', 'Operational control approach'],
                ['Scope 1', 'Mobile combustion from operationally controlled vehicles'],
                ['Scope 2', 'Purchased electricity; location-based and market-based reporting'],
                ['Scope 3', 'Assessment of all 15 categories using activity-based and spend-based estimates']
              ].map(([label, value]) => (
                <div key={label} className="p-4 bg-white border border-gray-200 rounded-xl">
                  <div className="text-xs text-gray-500">{label}</div>
                  <div className="text-sm font-medium mt-1">{value}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs sm:text-sm text-gray-600">
              Calculations use country/regional and global proxy emission factors where actual activity-specific factors were unavailable. Estimation limitations and data-quality improvement opportunities remain for supplier transport, treatment routes, air travel, hotel, rental car, commuting and end-of-life treatment data.
            </p>

            <div className="mt-6 text-center print:mt-4">
              <a
                href={documents.environmentalprincipalendorsment}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white font-medium hover:opacity-90 transition-opacity text-sm sm:text-base print:px-4 print:py-2 print:text-sm"
                style={{ backgroundColor: bhsColors.esgGreen }}
              >
                <Download className="w-4 h-4 print:w-3 print:h-3" />
                Download Environmental Principles Endorsement Statement
              </a>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Sustainability Targets',
      content: (
        <div className="max-w-6xl mx-auto space-y-6 print:space-y-4 px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-6 print:p-4 print:page-break-inside-avoid">
            <div className="text-center mb-6 print:mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 print:text-2xl print:mb-3"
                style={{ color: bhsColors.primaryDark }}>
                Sustainability Targets 2024-2030
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base print:text-sm">
                Our strategic targets and commitments for the next five years
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 print:gap-3">
              {sustainabilityTargets.map((target, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 print:p-3 print:page-break-inside-avoid">
                  <div className="flex items-center gap-2 mb-3 print:mb-2">
                    <div 
                      className="p-1.5 rounded-lg print:p-1"
                      style={{ backgroundColor: `${bhsColors.esgGreen}20` }}
                    >
                      <Target className="w-4 h-4 print:w-3 print:h-3" style={{ color: bhsColors.esgGreen }} />
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base print:text-sm">
                      {target.category}
                    </h4>
                  </div>
                  <div className="text-lg sm:text-xl font-bold mb-2 print:text-lg"
                    style={{ color: bhsColors.primaryDark }}>
                    {target.target}
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 print:text-xs">
                    <Calendar className="w-3 h-3 print:w-2.5 print:h-2.5" />
                    <span>{target.timeline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Implementation Roadmap',
      content: (
        <div className="max-w-6xl mx-auto space-y-6 print:space-y-4 px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-6 print:p-4 print:page-break-inside-avoid">
            <div className="text-center mb-6 print:mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 print:text-2xl print:mb-3"
                style={{ color: bhsColors.primaryDark }}>
                Implementation Roadmap 2025-2030
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base print:text-sm">
                Strategic milestones and implementation timeline
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-5 sm:p-6 print:p-4">
              <h4 className="text-lg sm:text-xl font-bold mb-6 text-center print:text-lg print:mb-4">
                Implementation Timeline
              </h4>

              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
                <div className="space-y-4 ml-6 print:space-y-3 print:ml-5">
                  {[
                    { year: '2025', milestone: 'Female workforce target ≥18% | Enhanced monitoring systems' },
                    { year: '2026', milestone: 'Fleet optimization programs | Advanced telematics deployment' },
                    { year: '2027', milestone: '100% ethics training coverage | Supply chain engagement' },
                    { year: '2028', milestone: 'Scope 2 target achievement (-15%) | Renewable energy transition' },
                    { year: '2030', milestone: 'Scope 3 travel target (-30%) | Net-zero roadmap finalization' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 print:gap-2 print:page-break-inside-avoid">
                      <div 
                        className="w-3 h-3 rounded-full border-2 border-white shadow-md flex-shrink-0 mt-1 print:w-2 print:h-2"
                        style={{ backgroundColor: bhsColors.esgGreen }}
                      ></div>
                      <div>
                        <div className="font-bold text-sm sm:text-base print:text-sm"
                          style={{ color: bhsColors.primaryDark }}>
                          {item.year}
                        </div>
                        <div className="text-gray-700 text-xs sm:text-sm print:text-xs">
                          {item.milestone}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center print:mt-4">
              <a
                href={documents.ghgProgress}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-white font-medium hover:opacity-90 transition-opacity text-sm sm:text-base print:px-4 print:py-2 print:text-sm"
                style={{ backgroundColor: bhsColors.esgGreen }}
              >
                <Download className="w-4 h-4 print:w-3 print:h-3" />
                Download Progress Summary
              </a>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="min-h-screen py-12 sm:py-16 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4"
            style={{ color: bhsColors.primaryDark }}>
            Assurance & Roadmap
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to verification, continuous improvement, and long-term sustainability goals
          </p>
        </div>

        {/* Responsive Tabs */}
        <div className="flex justify-center mb-10 sm:mb-12 overflow-x-auto">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 flex flex-wrap sm:flex-nowrap gap-2">
            {pages.map((page, index) => (
              <button
                key={index}
                onClick={() => setActivePage(index)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activePage === index
                    ? 'text-white shadow-lg transform sm:scale-105'
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

        <div className="animate-fadeIn">
          {pages[activePage].content}
        </div>
      </div>
    </section>
  );
};

export default AssuranceSection;