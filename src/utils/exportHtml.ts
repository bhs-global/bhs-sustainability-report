import type { MetricCategory } from '../data/metrics';

export function generateStaticHtml(metrics: MetricCategory[]): string {
  const serializedMetrics = metrics.map(category => ({
    ...category,
    metrics: category.metrics.map(metric => ({
      ...metric,
      icon: metric.icon.displayName || metric.icon.name || String(metric.icon).split('function ')[1]?.split('(')[0]?.toLowerCase() || 'circle'
    }))
  }));
  
  const metricsData = JSON.stringify(serializedMetrics);

  const sectionImages = {
    environmental: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=1600",
    labor: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1600",
    ethics: "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1600",
    procurement: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600",
    improvement: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
  };
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sustainability Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        .modal-backdrop {
            background-color: rgba(0, 0, 0, 0.5);
            transition: opacity 0.2s ease-in-out;
        }
        .modal-content {
            transform: scale(0.95);
            opacity: 0;
            transition: all 0.2s ease-in-out;
        }
        .modal-content.show {
            transform: scale(1);
            opacity: 1;
        }
        .metric-card {
            transition: all 0.3s ease-in-out;
        }
        .metric-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        @media print {
            body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
            .modal-backdrop { display: none; }
            .modal-content { 
                position: relative;
                transform: none;
                opacity: 1;
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body class="bg-gradient-to-b from-gray-50 to-gray-100">
    <div id="app" class="min-h-screen p-6">
        <header class="max-w-7xl mx-auto mb-12 text-center">
            <div class="inline-block bg-green-50 rounded-full px-6 py-2 mb-4">
                <h1 class="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                    Sustainability Dashboard
                </h1>
            </div>
            <p class="text-gray-600 text-lg max-w-2xl mx-auto">
                Tracking our commitment to environmental and social responsibility through comprehensive metrics and transparent reporting
            </p>
        </header>

        <main class="max-w-7xl mx-auto space-y-12" id="metrics-container"></main>

        <footer class="max-w-7xl mx-auto mt-16 text-center text-gray-500">
            <p>Generated on: ${new Date().toLocaleString()}</p>
        </footer>
    </div>

    <!-- Modal Template -->
    <div id="modal" class="fixed inset-0 z-50 hidden">
        <div class="modal-backdrop fixed inset-0"></div>
        <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4">
                <div class="modal-content relative bg-white rounded-lg w-full max-w-2xl mx-4 p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h2 id="modal-title" class="text-xl font-semibold text-gray-900"></h2>
                        <button onclick="closeModal()" class="p-1 rounded-full hover:bg-gray-100">
                            <i data-lucide="x" class="w-5 h-5"></i>
                        </button>
                    </div>
                    <div id="modal-content"></div>
                </div>
            </div>
        </div>
    </div>

    <script>
        const metrics = ${metricsData};
        const sectionImages = ${JSON.stringify(sectionImages)};
        let currentMetric = null;

        function showModal(metric) {
            currentMetric = metric;
            const modal = document.getElementById('modal');
            const modalTitle = document.getElementById('modal-title');
            const modalContent = document.getElementById('modal-content');

            modalTitle.textContent = metric.title;
            modalContent.innerHTML = \`
                <div class="space-y-6">
                    <div class="flex items-center gap-4 bg-green-50 p-4 rounded-lg">
                        <i data-lucide="\${metric.icon}" class="w-10 h-10 text-green-600"></i>
                        <div>
                            <p class="text-3xl font-bold text-gray-900">\${metric.value}</p>
                            <p class="text-gray-600 text-lg">\${metric.subtitle || ''}</p>
                        </div>
                    </div>
                    
                    <div class="prose prose-green max-w-none">
                        <p class="text-gray-700 text-lg leading-relaxed">\${metric.details}</p>
                    </div>

                    \${metric.trend !== undefined ? \`
                        <div class="bg-gray-50 p-6 rounded-xl">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">Performance Metrics</h3>
                            <div class="grid grid-cols-2 gap-8">
                                <div>
                                    <p class="text-sm font-medium text-gray-600 mb-1">Current Progress</p>
                                    <div class="flex items-baseline gap-2">
                                        <p class="text-2xl font-bold text-gray-900">\${metric.trend}%</p>
                                        <p class="text-sm text-gray-500">achieved</p>
                                    </div>
                                </div>
                                <div>
                                    <p class="text-sm font-medium text-gray-600 mb-1">Target</p>
                                    <div class="flex items-baseline gap-2">
                                        <p class="text-2xl font-bold text-gray-900">\${metric.target}%</p>
                                        <p class="text-sm text-gray-500">goal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    \` : ''}

                    \${metric.documents ? \`
                        <div class="border-t pt-4">
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">Supporting Documents</h3>
                            <div class="space-y-3">
                                \${metric.documents.map(doc => \`
                                    <div class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <i data-lucide="external-link" class="w-5 h-5 text-green-600 flex-shrink-0 mt-1"></i>
                                        <div>
                                            <a href="\${doc.url}" target="_blank" rel="noopener noreferrer"
                                               class="text-green-600 hover:text-green-700 font-medium">
                                                \${doc.name}
                                            </a>
                                            <p class="text-sm text-gray-600">\${doc.description}</p>
                                        </div>
                                    </div>
                                \`).join('')}
                            </div>
                        </div>
                    \` : ''}
                </div>
            \`;

            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.querySelector('.modal-content').classList.add('show');
            }, 10);
            lucide.createIcons();
        }

        function closeModal() {
            const modal = document.getElementById('modal');
            const modalContent = modal.querySelector('.modal-content');
            modalContent.classList.remove('show');
            setTimeout(() => {
                modal.classList.add('hidden');
                currentMetric = null;
            }, 200);
        }

        function createMetricCard(metric) {
            const getTrendColor = (trend) => {
                if (trend === undefined) return 'text-gray-500';
                return trend >= 0 ? 'text-green-500' : 'text-red-500';
            };

            const formatTrend = (trend) => {
                if (trend === undefined) return null;
                return \`\${trend >= 0 ? '+' : ''}\${trend}%\`;
            };

            return \`
                <div onclick='showModal(\${JSON.stringify(metric)})'
                     class="metric-card bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-100 transition-all duration-300 p-6 cursor-pointer group">
                    <div class="flex items-start justify-between">
                        <div class="flex items-start gap-4 flex-1">
                            <div class="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                                <i data-lucide="\${metric.icon}" class="w-6 h-6 text-green-600"></i>
                            </div>
                            <div class="space-y-1 flex-1">
                                <h3 class="text-sm font-medium text-gray-600">\${metric.title}</h3>
                                <p class="text-xl font-bold text-gray-900">\${metric.value}</p>
                                \${metric.subtitle ? \`<p class="text-sm text-gray-500">\${metric.subtitle}</p>\` : ''}
                                \${metric.trend !== undefined ? \`
                                    <div class="flex items-center gap-2 mt-2">
                                        <i data-lucide="\${metric.trend >= 0 ? 'trending-up' : 'trending-down'}"
                                           class="w-4 h-4 \${getTrendColor(metric.trend)}"></i>
                                        <span class="text-sm font-medium \${getTrendColor(metric.trend)}">
                                            \${formatTrend(metric.trend)}
                                        </span>
                                        \${metric.target !== undefined ? \`
                                            <span class="text-sm text-gray-500">
                                                / Target: \${metric.target}%
                                            </span>
                                        \` : ''}
                                    </div>
                                \` : ''}
                            </div>
                            <i data-lucide="chevron-right" class="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors"></i>
                        </div>
                    </div>
                </div>
            \`;
        }

        function renderDashboard() {
            const container = document.getElementById('metrics-container');
            metrics.forEach(category => {
                const section = document.createElement('section');
                section.className = 'bg-white rounded-2xl shadow-lg overflow-hidden';
                section.innerHTML = \`
                    <div class="relative h-48 overflow-hidden">
                        <img
                            src="\${sectionImages[category.id]}"
                            alt="\${category.title}"
                            class="w-full h-full object-cover"
                        />
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
                            <div class="p-8 w-full">
                                <div class="relative">
                                    <h2 class="text-2xl font-bold text-white mb-2">\${category.title}</h2>
                                    <div class="h-1 w-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full opacity-90"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            \${category.metrics.map(metric => createMetricCard(metric)).join('')}
                        </div>
                    </div>
                \`;
                container.appendChild(section);
            });

            // Initialize Lucide icons
            lucide.createIcons();

            // Close modal when clicking outside
            document.querySelector('.modal-backdrop').onclick = closeModal;
        }

        // Handle keyboard events
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });

        // Render the dashboard when the page loads
        document.addEventListener('DOMContentLoaded', renderDashboard);
    </script>
</body>
</html>`;
}

export function downloadHtml(html: string) {
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'sustainability-dashboard.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Export all pages as a single HTML file
export function generateAllPagesHTML() {
  // Create a comprehensive HTML document with all sections
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BHS ESG Report 2024 - Complete Report</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(to bottom right, #f9fafb, #ffffff, #f3f4f6);
            color: #1f2937;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Montserrat', sans-serif;
        }
        
        .section-container {
            min-height: 100vh;
            padding: 80px 20px 40px;
            page-break-after: always;
        }
        
        .section-container:last-child {
            page-break-after: auto;
        }
        
        .nav-bar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid rgba(229, 231, 235, 0.5);
            padding: 12px 0;
        }
        
        .nav-content {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .nav-links {
            display: flex;
            gap: 8px;
        }
        
        .nav-link {
            padding: 8px 16px;
            border-radius: 6px;
            text-decoration: none;
            color: #374151;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s;
        }
        
        .nav-link:hover {
            background: rgba(243, 244, 246, 0.8);
            color: #111827;
        }
        
        .nav-link.active {
            background: #0A2640;
            color: white;
        }
        
        .content-wrapper {
            max-width: 1280px;
            margin: 0 auto;
        }
        
        @media print {
            .nav-bar {
                display: none;
            }
            .section-container {
                page-break-after: always;
                padding: 40px 20px;
            }
            @page {
                size: A4 landscape;
                margin: 0;
            }
        }
    </style>
</head>
<body>
    <nav class="nav-bar">
        <div class="nav-content">
            <div>
                <img src="https://bhs.global/wp-content/uploads/2026/02/01_New_Header_BHS_Logo_300dpi-300x90.png" 
                     alt="BHS Logo" style="height: 32px; width: auto;">
            </div>
            <div class="nav-links">
                <a href="#home" class="nav-link active">Home</a>
                <a href="#leadership" class="nav-link">Leadership</a>
                <a href="#environment" class="nav-link">Environment</a>
                <a href="#social" class="nav-link">Social</a>
                <a href="#governance" class="nav-link">Governance</a>
                <a href="#assurance" class="nav-link">Assurance</a>
            </div>
        </div>
    </nav>
    
    <div id="app-content">
        <!-- Content will be dynamically inserted here -->
        <div class="section-container" id="home-section">
            <div class="content-wrapper">
                ${getCurrentSectionHTML('home')}
            </div>
        </div>
        
        <div class="section-container" id="leadership-section">
            <div class="content-wrapper">
                ${getCurrentSectionHTML('leadership')}
            </div>
        </div>
        
        <div class="section-container" id="environment-section">
            <div class="content-wrapper">
                ${getCurrentSectionHTML('environment')}
            </div>
        </div>
        
        <div class="section-container" id="social-section">
            <div class="content-wrapper">
                ${getCurrentSectionHTML('social')}
            </div>
        </div>
        
        <div class="section-container" id="governance-section">
            <div class="content-wrapper">
                ${getCurrentSectionHTML('governance')}
            </div>
        </div>
        
        <div class="section-container" id="assurance-section">
            <div class="content-wrapper">
                ${getCurrentSectionHTML('assurance')}
            </div>
        </div>
    </div>
    
    <script>
        // Smooth scrolling for navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1) + '-section';
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });
        
        // Update active nav on scroll
        const sections = document.querySelectorAll('.section-container');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id').replace('-section', '');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
    </script>
</body>
</html>`;

  return html;
}

// Helper function to get section HTML (simplified - in real implementation, this would render React components)
function getCurrentSectionHTML(sectionId: string): string {
  // This is a placeholder - in a real implementation, you'd need to render React components to HTML
  // For now, we'll capture the current DOM content
  const sectionElement = document.querySelector(`section`);
  if (sectionElement) {
    return sectionElement.innerHTML;
  }
  return `<h1>${sectionId} Section</h1><p>Content for ${sectionId} section</p>`;
}

// Export function that captures all sections and sub-pages as a single HTML file
export function exportAllPagesAsHTML(setActiveSection?: (section: string) => void) {
  // Show loading message
  const loadingMsg = document.createElement('div');
  loadingMsg.id = 'html-export-loading';
  loadingMsg.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #0A2640; color: white; padding: 20px 40px; border-radius: 8px; z-index: 10000; font-weight: 600; box-shadow: 0 4px 12px rgba(0,0,0,0.3);';
  loadingMsg.textContent = 'Generating HTML export... Please wait.';
  document.body.appendChild(loadingMsg);
  
  // Collect all sections and their sub-pages
  const sections = ['home', 'leadership', 'environment', 'social', 'governance', 'assurance'];
  const allPages: Array<{ sectionId: string; pageIndex: number; pageTitle: string; content: string }> = [];
  let currentSectionIndex = 0;
  
  // Function to capture all pages in current section, then move to next section
  const captureSectionPages = () => {
    if (currentSectionIndex < sections.length) {
      const sectionId = sections[currentSectionIndex];
      
      // Change to this section if setActiveSection is provided
      if (setActiveSection) {
        setActiveSection(sectionId);
      }
      
      // Wait for React to render the section
      setTimeout(() => {
        // Find page navigation buttons - look for buttons in the page navigation area
        // These are typically in a container with rounded background
        const navContainers = document.querySelectorAll('div[class*="rounded"][class*="bg-white"], div[class*="rounded-lg"][class*="bg-white"]');
        let pageButtons: HTMLElement[] = [];
        
        navContainers.forEach(container => {
          const buttons = Array.from(container.querySelectorAll('button')).filter(btn => {
            const text = btn.textContent?.trim() || '';
            const hasText = text.length > 0 && text.length < 60;
            const isNotActionButton = !text.toLowerCase().includes('export') && 
                                     !text.toLowerCase().includes('admin') &&
                                     !text.toLowerCase().includes('download') &&
                                     !text.toLowerCase().includes('view report');
            // Check if button is likely a page navigation button
            return hasText && isNotActionButton && 
                   (btn.querySelector('svg') === null || btn.querySelector('svg[class*="Download"]') === null);
          }) as HTMLElement[];
          
          if (buttons.length > 0) {
            pageButtons = buttons;
          }
        });
        
        // If no page buttons found in containers, try finding buttons with specific patterns
        if (pageButtons.length === 0) {
          pageButtons = Array.from(document.querySelectorAll('button')).filter(btn => {
            const text = btn.textContent?.trim() || '';
            const parent = btn.parentElement;
            const isInNavContainer = parent?.classList.contains('rounded') || 
                                     parent?.classList.contains('rounded-lg') ||
                                     parent?.classList.contains('rounded-xl');
            return text.length > 0 && text.length < 60 && 
                   !text.toLowerCase().includes('export') && 
                   !text.toLowerCase().includes('admin') &&
                   !text.toLowerCase().includes('download') &&
                   !text.toLowerCase().includes('view report') &&
                   isInNavContainer;
          }) as HTMLElement[];
        }
        
        // If still no buttons found, assume single page (like home section)
        const actualPageCount = Math.max(1, pageButtons.length);
        
        // Capture each page in this section
        const capturePage = (pageIndex: number) => {
          if (pageIndex < actualPageCount) {
            // Click the page button if it exists
            if (pageButtons[pageIndex]) {
              // Create and dispatch a click event
              const clickEvent = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
              });
              pageButtons[pageIndex].dispatchEvent(clickEvent);
            }
            
            // Wait for React to render the page
            setTimeout(() => {
              const sectionElement = document.querySelector('section');
              if (sectionElement) {
                // Clone the section to preserve its content
                const cloned = sectionElement.cloneNode(true) as HTMLElement;
                
                // Get page title from button or section
                let pageTitle = `Page ${pageIndex + 1}`;
                if (pageButtons[pageIndex]) {
                  pageTitle = pageButtons[pageIndex].textContent?.trim() || pageTitle;
                }
                
                // Remove navigation buttons but keep content
                cloned.querySelectorAll('button').forEach(btn => {
                  const text = btn.textContent?.trim() || '';
                  // Keep download buttons, remove navigation buttons
                  if (text.toLowerCase().includes('export') || 
                      text.toLowerCase().includes('download') ||
                      btn.querySelector('svg[class*="Download"]')) {
                    // Keep download buttons
                    return;
                  }
                  // Remove page navigation buttons
                  if (btn.getAttribute('onclick') || btn.onclick || 
                      text.length < 50 && !text.toLowerCase().includes('download')) {
                    btn.style.display = 'none';
                  }
                });
                
                allPages.push({
                  sectionId,
                  pageIndex,
                  pageTitle,
                  content: cloned.outerHTML
                });
              }
              
              // Move to next page
              if (pageIndex + 1 < actualPageCount) {
                capturePage(pageIndex + 1);
              } else {
                // All pages in this section captured, move to next section
                currentSectionIndex++;
                if (currentSectionIndex < sections.length) {
                  captureSectionPages();
                } else {
                  // All sections and pages captured, generate HTML
                  try {
                    const htmlContent = generateCompleteHTML(allPages);
                    downloadHtml(htmlContent);
                    
                    // Remove loading message
                    setTimeout(() => {
                      const msg = document.getElementById('html-export-loading');
                      if (msg && msg.parentNode) {
                        document.body.removeChild(msg);
                      }
                    }, 500);
                  } catch (error) {
                    console.error('Error generating HTML export:', error);
                    const msg = document.getElementById('html-export-loading');
                    if (msg) {
                      msg.textContent = 'Error generating export. Please try again.';
                      msg.style.background = '#dc2626';
                      setTimeout(() => {
                        if (msg.parentNode) {
                          document.body.removeChild(msg);
                        }
                      }, 3000);
                    }
                  }
                }
              }
            }, 400); // Wait for React to render the page
          }
        };
        
        // Start capturing pages for this section
        capturePage(0);
      }, 400); // Wait for React to render the section
    }
  };
  
  // Start capturing sections
  setTimeout(() => {
    captureSectionPages();
  }, 200);
}

function generateCompleteHTML(allPages: Array<{ sectionId: string; pageIndex: number; pageTitle: string; content: string }>): string {
  // Group pages by section
  const pagesBySection: { [key: string]: Array<{ pageIndex: number; pageTitle: string; content: string }> } = {};
  allPages.forEach(page => {
    if (!pagesBySection[page.sectionId]) {
      pagesBySection[page.sectionId] = [];
    }
    pagesBySection[page.sectionId].push({
      pageIndex: page.pageIndex,
      pageTitle: page.pageTitle,
      content: page.content
    });
  });
  
  // Create a comprehensive standalone HTML file with all sections and sub-pages
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BHS ESG Report 2024 - Complete Report</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(to bottom right, #f9fafb, #ffffff, #f3f4f6);
            color: #1f2937;
            line-height: 1.6;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Montserrat', sans-serif;
        }
        
        .section-page {
            min-height: 100vh;
            padding: 80px 20px 40px;
            page-break-after: always;
            width: 100%;
            display: block !important;
        }
        
        .section-page:last-child {
            page-break-after: auto;
        }
        
        /* Responsive design */
        @media (max-width: 1024px) {
            .nav-content {
                flex-direction: column;
                gap: 12px;
                padding: 12px 24px;
            }
            .nav-links {
                flex-wrap: wrap;
                justify-content: center;
            }
        }
        
        @media (max-width: 768px) {
            .nav-links {
                gap: 4px;
            }
            .nav-link {
                font-size: 12px;
                padding: 6px 12px;
            }
            .section-page {
                padding: 60px 15px 30px;
            }
        }
        
        /* Ensure content is responsive */
        .section-page * {
            max-width: 100%;
        }
        
        img {
            max-width: 100%;
            height: auto;
        }
        
        .nav-bar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid rgba(229, 231, 235, 0.5);
            padding: 12px 0;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .nav-content {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .nav-links {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }
        
        .nav-link {
            padding: 8px 16px;
            border-radius: 6px;
            text-decoration: none;
            color: #374151;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s;
            cursor: pointer;
        }
        
        .nav-link:hover {
            background: rgba(243, 244, 246, 0.8);
            color: #111827;
        }
        
        .nav-link.active {
            background: #0A2640;
            color: white;
        }
        
        .content-wrapper {
            max-width: 1280px;
            margin: 0 auto;
        }
        
        /* Hide interactive elements that won't work in static HTML */
        button[onclick],
        button[class*="onClick"],
        .no-export {
            display: none !important;
        }
        
        /* Ensure all sections are visible */
        section {
            display: block !important;
            opacity: 1 !important;
            visibility: visible !important;
            position: relative !important;
        }
        
        /* Make sure all content is visible */
        .section-page section {
            display: block !important;
            min-height: auto !important;
        }
        
        @media print {
            .nav-bar {
                display: none;
            }
            .section-page {
                page-break-after: always;
                padding: 40px 20px;
            }
            @page {
                size: A4 landscape;
                margin: 0;
            }
            nav, button {
                display: none !important;
            }
        }
        
        /* Print optimizations */
        @media print {
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
        }
    </style>
</head>
<body>
    <nav class="nav-bar">
        <div class="nav-content">
            <div>
                <img src="https://bhs.global/wp-content/uploads/2026/02/01_New_Header_BHS_Logo_300dpi-300x90.png" 
                     alt="BHS Logo" style="height: 32px; width: auto;">
            </div>
            <div class="nav-links">
                ${Object.keys(pagesBySection).map(sectionId => {
                  const sectionLabel = sectionId.charAt(0).toUpperCase() + sectionId.slice(1).replace(/([A-Z])/g, ' $1');
                  return `<a href="#${sectionId}-section-0" class="nav-link" onclick="scrollToSection('${sectionId}-section-0'); return false;">${sectionLabel}</a>`;
                }).join('\n                ')}
            </div>
        </div>
    </nav>
    
    <div id="app-content">
        ${Object.entries(pagesBySection).map(([sectionId, pages]) => {
          return pages.map((page) => {
            // Clean up the content - remove any React-specific attributes and ensure it's displayable
            const cleanedContent = page.content
              .replace(/data-reactroot="[^"]*"/g, '')
              .replace(/data-react-helmet="[^"]*"/g, '')
              .replace(/style="display:\s*none[^"]*"/gi, 'style="display: block !important"')
              .replace(/data-react-[^=]*="[^"]*"/g, '');
            
            const pageId = `${sectionId}-section-${page.pageIndex}`;
            
            return `<div class="section-page" id="${pageId}" data-section="${sectionId}" data-page-index="${page.pageIndex}">
              ${cleanedContent}
            </div>`;
          }).join('\n');
        }).join('\n')}
    </div>
    
    <script>
        // Smooth scrolling function
        function scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        }
        
        // Update active nav on scroll
        window.addEventListener('scroll', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('.section-page');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id') || '';
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href') || '';
                if (current && href.includes(current.split('-section')[0])) {
                    link.classList.add('active');
                }
            });
        });
        
        // Make all sections visible and ensure proper display
        document.querySelectorAll('section, .section-page').forEach(section => {
            section.style.display = 'block';
            section.style.visibility = 'visible';
            section.style.opacity = '1';
            section.style.position = 'relative';
        });
        
        // Remove interactive buttons that won't work in static HTML
        document.querySelectorAll('button').forEach(btn => {
            const onclick = btn.getAttribute('onclick');
            const className = btn.className || '';
            // Hide navigation buttons and page switchers
            if (onclick && (onclick.includes('onSectionChange') || onclick.includes('setActivePage') || onclick.includes('onNavigate'))) {
                btn.style.display = 'none';
            }
            // Hide export buttons in the exported HTML
            if (className.includes('Export') || btn.textContent?.includes('Export')) {
                btn.style.display = 'none';
            }
        });
        
        // Ensure all section pages are visible
        document.querySelectorAll('.section-page').forEach(page => {
            page.style.display = 'block';
        });
    </script>
</body>
</html>`;
}