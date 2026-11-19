import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Code, Settings } from 'lucide-react';

interface FooterProps {
  onExportPDF?: () => void;
  onExportHTML?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onExportPDF, onExportHTML }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-t border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2">
        <div className="flex items-center justify-center gap-4">
          {/* Action Buttons */}
          <div className="flex items-center gap-1 sm:gap-2">
            {onExportPDF && (
              <button
                onClick={onExportPDF}
                aria-label="Export current page as PDF"
                className="relative group p-1 sm:p-1.5 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100/80 transition-all duration-200"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 hidden sm:block">
                  Export PDF
                </span>
              </button>
            )}
            {onExportHTML && (
              <button
                onClick={onExportHTML}
                aria-label="Export all pages as a single HTML file"
                className="relative group p-1 sm:p-1.5 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100/80 transition-all duration-200"
              >
                <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 hidden sm:block">
                  Export HTML
                </span>
              </button>
            )}
            <Link
              to="/login"
              aria-label="Admin"
              className="relative group p-1 sm:p-1.5 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100/80 transition-all duration-200"
            >
              <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="pointer-events-none absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 hidden sm:block">
                Admin
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;