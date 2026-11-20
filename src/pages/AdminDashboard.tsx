import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { bhsColors } from '../data/bhsData';
import { Settings, LogOut, Download, Save, Eye } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const [activeSection, setActiveSection] = useState('kpi');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSave = () => {
    setSuccessMessage('Dashboard exported successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const sections = [
    { id: 'kpi', label: 'KPI Cards', icon: '📊' },
    { id: 'emissions', label: 'Emissions Data', icon: '🌱' },
    { id: 'workforce', label: 'Workforce Data', icon: '👥' },
    { id: 'documents', label: 'Documents', icon: '📄' }
  ];

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'kpi':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">KPI Cards Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Scope 1+2 Emissions', value: '3,860.96', unit: 'tCO₂e', trend: undefined },
                { title: 'Total Employees', value: '406', trend: 4.6 },
                { title: 'Total Waste (2024)', value: '10,048.84', unit: 'kg', trend: 40.9 },
                { title: 'Flexi Benefits', value: 'SGD 31,957.29', trend: 12.3 }
              ].map((kpi, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                      <input
                        type="text"
                        defaultValue={kpi.title}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Value</label>
                        <input
                          type="text"
                          defaultValue={kpi.value}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Trend (%)</label>
                        <input
                          type="number"
                          step="0.1"
                          defaultValue={kpi.trend}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    {kpi.unit && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                        <input
                          type="text"
                          defaultValue={kpi.unit}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'emissions':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Emissions Data Management</h3>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Scope 1 (tCO₂e)</label>
                  <input
                    type="number"
                    step="0.01"
                    defaultValue="1403.90"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Scope 2 (tCO₂e)</label>
                  <input
                    type="number"
                    step="0.01"
                    defaultValue="308.49"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Scope 3 (tCO₂e)</label>
                  <input
                    type="number"
                    step="0.01"
                    defaultValue="7616.29"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Select a section to edit</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav 
        className="shadow-lg border-b border-gray-200"
        style={{ backgroundColor: bhsColors.primaryDark }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Settings className="w-6 h-6 text-white mr-3" />
              <h1 className="text-xl font-semibold text-white">BHS ESG Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center px-4 py-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Dashboard
              </button>
              <button
                onClick={handleSave}
                className="inline-flex items-center px-4 py-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 text-sm text-red-300 hover:text-red-200 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-8 px-6">
        {successMessage && (
          <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg">
            {successMessage}
          </div>
        )}

        <div className="px-4 py-6 sm:px-0">
          {/* Section Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? 'text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                }`}
                style={{
                  backgroundColor: activeSection === section.id ? bhsColors.esgGreen : 'white'
                }}
              >
                <span>{section.icon}</span>
                <span>{section.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {renderSectionContent()}
            
            {/* Save Button */}
            <div className="mt-8 flex justify-end">
              <button
                onClick={handleSave}
                className="inline-flex items-center px-6 py-3 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: bhsColors.esgGreen }}
              >
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;