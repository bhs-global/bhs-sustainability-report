import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import type { Document } from '../data/metrics';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  documents?: Document[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, documents }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 pr-4">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="max-h-[calc(90vh-80px)] overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">
          {children}
          
          {documents && documents.length > 0 && (
            <div className="border-t pt-4 sm:pt-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Supporting Documents</h3>
              <div className="space-y-2 sm:space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="min-w-0 flex-1">
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 font-medium text-sm sm:text-base break-words"
                      >
                        {doc.name}
                      </a>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">{doc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;