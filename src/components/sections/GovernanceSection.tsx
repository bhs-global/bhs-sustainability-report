import React, { useState } from 'react';
import { bhsColors, grievanceData, documents } from '../../data/bhsData';
import BarChart from '../charts/BarChart';
import { Download, Shield, FileText, CheckCircle, Scale, Gavel } from 'lucide-react';

const GovernanceSection: React.FC = () => {
  const [activePage, setActivePage] = useState(0);

  const pages = [
    {
      title: 'Ethics & Compliance',
      content: (
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Grievance Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Grievance Resolution
                </h3>
              </div>
              
              <div className="mb-6">
                <BarChart
                  title="Grievance Resolution Status (2023 to 2025)"
                  data={[
                    { label: 'Resolved', value: grievanceData.resolved, color: bhsColors.esgGreen },
                    { label: 'Unresolved', value: grievanceData.total - grievanceData.resolved, color: bhsColors.neutralGrey }
                  ]}
                  height={250}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">
                    {grievanceData.total}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Total Grievances
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                    {grievanceData.resolutionRate}%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Resolution Rate
                  </div>
                </div>
              </div>
            </div>
            
            {/* Policies Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                <h3 className="text-xl sm:text-2xl font-bold">
                  Key Policies & Documents
                </h3>
              </div>
              
              <div className="space-y-4 mb-6">
                {[
                  {
                    title: 'Human Rights Policy',
                    description: 'Commitment to respecting and protecting human rights across all operations',
                    status: 'Active'
                  },
                  {
                    title: 'Anti-Forced Labour Policy',
                    description: 'Zero tolerance approach to forced labour and human trafficking',
                    status: 'Active'
                  },
                  {
                    title: 'Grievance Mechanism',
                    description: 'Accessible channels for reporting concerns and seeking resolution',
                    status: 'Active'
                  },
                  {
                    title: 'Ethics Training Program',
                    description: 'Comprehensive training on ethical business practices',
                    status: 'Ongoing'
                  }
                ].map((policy, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                          {policy.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {policy.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-green-600 font-medium">
                          {policy.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4">
                <a
                  href={documents.esgReporting}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-white text-sm sm:text-base hover:opacity-90 transition-opacity w-full justify-center"
                  style={{ backgroundColor: bhsColors.esgGreen }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download Environmental, Labour & Human Rights Report
                </a>
              </div>
            </div>

          </div>
        </div>
      )
    },

    {
      title: 'Supply Chain & Scope 3',
      content: (
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-8">
            
            <div className="text-center mb-6 sm:mb-8">
              <h3
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ color: bhsColors.primaryDark }}
              >
                Scope 3 Emissions Reporting
              </h3>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Comprehensive reporting across all Scope 3 categories using DEFRA-aligned methodology
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {[
                { category: 'Category 1', name: 'Purchased Goods', value: '2,847.3', unit: 'tCO₂e' },
                { category: 'Category 2', name: 'Capital Goods', value: '1,234.5', unit: 'tCO₂e' },
                { category: 'Category 3', name: 'Fuel & Energy', value: '456.7', unit: 'tCO₂e' },
                { category: 'Category 4', name: 'Upstream Transport', value: '789.2', unit: 'tCO₂e' },
                { category: 'Category 5', name: 'Waste Generated', value: '123.4', unit: 'tCO₂e' },
                { category: 'Category 6', name: 'Business Travel', value: '2,165.1', unit: 'tCO₂e' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200"
                >
                  <div className="text-xs sm:text-sm font-medium text-gray-500 mb-1">
                    {item.category}
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                    {item.name}
                  </div>
                  <div
                    className="text-xl sm:text-2xl font-bold"
                    style={{ color: bhsColors.esgGreen }}
                  >
                    {item.value}{' '}
                    <span className="text-xs sm:text-sm text-gray-600">
                      {item.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 rounded-xl p-5 sm:p-6 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">
                    Methodology & Verification Status
                  </h4>
                  <ul className="text-blue-800 text-xs sm:text-sm space-y-1">
                    <li>• DEFRA emission factors applied for all categories</li>
                    <li>• Scope 3 emissions reported but not included in verification boundary</li>
                    <li>• Data collection systems established for continuous improvement</li>
                    <li>• Annual review and update of emission factors</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      )
    }
  ];

  return (
    <section className="min-h-screen py-10 sm:py-14 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      
      {/* Background Icons - Hidden on Mobile */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 right-20">
          <Shield className="w-24 sm:w-32 h-24 sm:h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Scale className="w-24 sm:w-32 h-24 sm:h-32 text-purple-500" />
        </div>
        <div className="absolute top-1/2 left-1/3">
          <Gavel className="w-16 sm:w-24 h-16 sm:h-24 text-indigo-500" />
        </div>
        <div className="absolute bottom-1/3 right-1/4">
          <CheckCircle className="w-16 sm:w-24 h-16 sm:h-24 text-green-500" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: bhsColors.primaryDark }}
          >
            Governance & Ethics
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Maintaining the highest standards of corporate governance and ethical business practices
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
                  backgroundColor:
                    activePage === index
                      ? bhsColors.primaryDark
                      : 'transparent'
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

export default GovernanceSection;