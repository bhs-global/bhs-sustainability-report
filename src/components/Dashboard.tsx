import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import HomeSection from './sections/HomeSection';
import LeadershipSection from './sections/LeadershipSection';
import EnvironmentSection from './sections/EnvironmentSection';
import SocialSection from './sections/SocialSection';
import GovernanceSection from './sections/GovernanceSection';
import AssuranceSection from './sections/AssuranceSection';
import { generatePDF } from '../utils/pdfExport';
import { exportAllPagesAsHTML } from '../utils/exportHtml';

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleExportPDF = () => {
    generatePDF();
  };

  const handleExportHTML = () => {
    // Pass setActiveSection so we can programmatically render all sections
    exportAllPagesAsHTML(setActiveSection);
  };

  const handleNavigateFromHome = () => {
    setActiveSection('leadership');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection onNavigate={handleNavigateFromHome} />;
      case 'leadership':
        return <LeadershipSection />;
      case 'environment':
        return <EnvironmentSection />;
      case 'social':
        return <SocialSection />;
      case 'governance':
        return <GovernanceSection />;
      case 'assurance':
        return <AssuranceSection />;
      default:
        return <HomeSection onNavigate={handleNavigateFromHome} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-x-hidden">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
      />
      <main className="pt-14 sm:pt-16 pb-12 px-2 sm:px-0">
        {renderSection()}
      </main>
      <Footer 
        onExportPDF={handleExportPDF}
        onExportHTML={handleExportHTML}
      />
    </div>
  );
};

export default Dashboard;