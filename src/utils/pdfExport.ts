// Export current page - directly prints current visible page
export const generatePDF = () => {
  // Add print styles if not already present
  if (!document.getElementById('print-styles')) {
    const style = document.createElement('style');
    style.id = 'print-styles';
    style.textContent = `
      @media print {
        @page {
          size: A4 landscape;
          margin: 0.3cm;
        }
        html {
          font-size: 10px !important;
        }
        body {
          font-size: 10px !important;
          line-height: 1.3 !important;
        }
        nav, button, .fixed { display: none !important; }
        main { padding-top: 0 !important; }
        section { 
          min-height: auto !important;
          max-height: calc(100vh - 0.6cm) !important;
          height: auto !important;
          page-break-after: always;
          page-break-inside: avoid;
          padding: 0.5cm !important;
          overflow: hidden !important;
          display: flex !important;
          flex-direction: column !important;
        }
        h1 { font-size: 2rem !important; margin-bottom: 0.5rem !important; }
        h2 { font-size: 1.5rem !important; margin-bottom: 0.4rem !important; }
        h3 { font-size: 1.2rem !important; margin-bottom: 0.3rem !important; }
        p { font-size: 0.9rem !important; margin-bottom: 0.3rem !important; }
        .space-y-8 > * + * { margin-top: 0.5rem !important; }
        .space-y-6 > * + * { margin-top: 0.4rem !important; }
        .space-y-4 > * + * { margin-top: 0.3rem !important; }
        .p-8, .p-6 { padding: 0.5rem !important; }
        .p-4 { padding: 0.4rem !important; }
        .mb-12, .mb-8 { margin-bottom: 0.5rem !important; }
        .mb-6 { margin-bottom: 0.4rem !important; }
        .mb-4 { margin-bottom: 0.3rem !important; }
        .gap-8 { gap: 0.4rem !important; }
        .gap-6 { gap: 0.3rem !important; }
        .gap-4 { gap: 0.25rem !important; }
        svg { width: 1rem !important; height: 1rem !important; }
        canvas, svg { max-height: 15vh !important; }
        .text-4xl { font-size: 1.5rem !important; }
        .text-3xl { font-size: 1.3rem !important; }
        .text-2xl { font-size: 1.1rem !important; }
        .text-xl { font-size: 1rem !important; }
        .text-lg { font-size: 0.95rem !important; }
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Trigger print dialog
  window.print();
};


const createPrintWindow = (printWindow: Window, content: string, onProgress?: (section: string) => void) => {
  
  // Create the print-optimized HTML
  const printHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>BHS Sustainability Report 2025</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Montserrat', sans-serif;
        }
        
        @page {
          size: A4 landscape;
          margin: 0.5cm;
        }
        
        @media print {
          @page {
            margin: 0.3cm;
            size: A4 landscape;
            marks: none;
          }
          
          html {
            font-size: 10px !important;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            padding: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            font-size: 10px !important;
            line-height: 1.3 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          .no-print { display: none !important; }
          .print-section { 
            page-break-after: always;
            width: 100vw;
            height: calc(100vh - 0.6cm);
            display: flex;
            flex-direction: column;
            padding: 0.5cm;
            overflow: hidden;
            box-sizing: border-box;
          }
          .print-section:last-child { page-break-after: avoid; }
          
          /* Hide navigation and interactive elements */
          nav, button, .fixed, .no-print { display: none !important; }
          
          /* Scale down headings */
          h1 {
            font-size: 2rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.5rem !important;
          }
          
          h2 {
            font-size: 1.5rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.4rem !important;
          }
          
          h3 {
            font-size: 1.2rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.3rem !important;
          }
          
          h4 {
            font-size: 1rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0.3rem !important;
          }
          
          p {
            font-size: 0.9rem !important;
            line-height: 1.3 !important;
            margin-bottom: 0.3rem !important;
          }
          
          /* Ensure content fits properly */
          main { 
            padding-top: 0 !important;
            margin: 0 !important;
          }
          section { 
            min-height: auto !important;
            max-height: calc(100vh - 0.6cm) !important;
            height: auto !important;
            width: 100vw !important;
            margin: 0 !important;
            padding: 0.5cm !important;
            page-break-after: always;
            page-break-inside: avoid;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
            box-sizing: border-box !important;
          }
          
          /* Ensure content containers don't break pages */
          .bg-white,
          .rounded-xl,
          .rounded-3xl {
            page-break-inside: avoid;
            padding: 0.5rem !important;
            margin-bottom: 0.4rem !important;
          }
          
          /* Drastically reduce spacing for print */
          .space-y-8 > * + * {
            margin-top: 0.5rem !important;
          }
          
          .space-y-6 > * + * {
            margin-top: 0.4rem !important;
          }
          
          .space-y-4 > * + * {
            margin-top: 0.3rem !important;
          }
          
          /* Reduce padding */
          .p-8, .p-6 {
            padding: 0.5rem !important;
          }
          
          .p-4 {
            padding: 0.4rem !important;
          }
          
          .mb-12, .mb-8 {
            margin-bottom: 0.5rem !important;
          }
          
          .mb-6 {
            margin-bottom: 0.4rem !important;
          }
          
          .mb-4 {
            margin-bottom: 0.3rem !important;
          }
          
          /* Grid gaps */
          .gap-8 {
            gap: 0.4rem !important;
          }
          
          .gap-6 {
            gap: 0.3rem !important;
          }
          
          .gap-4 {
            gap: 0.25rem !important;
          }
          
          /* Scale down icons and charts */
          svg {
            width: 1rem !important;
            height: 1rem !important;
          }
          
          canvas, svg {
            max-width: 100% !important;
            max-height: 15vh !important;
          }
          
          /* Scale down text sizes */
          .text-4xl {
            font-size: 1.5rem !important;
          }
          
          .text-3xl {
            font-size: 1.3rem !important;
          }
          
          .text-2xl {
            font-size: 1.1rem !important;
          }
          
          .text-xl {
            font-size: 1rem !important;
          }
          
          .text-lg {
            font-size: 0.95rem !important;
          }
          
          /* Optimize colors for print */
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Ensure full page coverage */
          html, body {
            width: 100% !important;
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        }
        
        .animate-fadeIn { animation: none; }
        
        /* Print-specific styles */
        .print-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-bottom: 2px solid #0A2640;
          margin-bottom: 30px;
        }
        
        .print-footer {
          position: fixed;
          bottom: 1cm;
          left: 1cm;
          right: 1cm;
          text-align: center;
          font-size: 12px;
          color: #666;
          border-top: 1px solid #ddd;
          padding-top: 10px;
        }
      </style>
    </head>
    <body>
      <div style="position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: #0A2640; color: white; padding: 15px 30px; border-radius: 8px; z-index: 10000; font-weight: 600; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" class="no-print">
        <div style="text-align: center; margin-bottom: 8px;">📄 Print Instructions</div>
        <div style="font-size: 14px; font-weight: 400;">Please uncheck "Headers and footers" in the print dialog</div>
        <div style="font-size: 12px; font-weight: 400; margin-top: 4px; opacity: 0.9;">This will remove browser-generated headers/footers (localhost, time, etc.)</div>
      </div>
      
      ${content.replace(/<nav[^>]*>.*?<\/nav>/gs, '')}
      
      <script>
        // Remove browser headers/footers and auto-print
        window.onload = function() {
          // Ensure the current section is visible
          const sections = document.querySelectorAll('section');
          sections.forEach(section => {
            section.style.display = 'block';
          });
          
          setTimeout(function() {
            window.print();
            setTimeout(function() {
              window.close();
            }, 500);
          }, 1500);
        };
      </script>
    </body>
    </html>
  `;
  
  printWindow.document.write(printHTML);
  printWindow.document.close();
};