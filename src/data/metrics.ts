import {
  Fuel,
  Wind,
  Droplet,
  Package,
  Trash2,
  Recycle,
  Users,
  UserCheck,
  RefreshCw,
  UserCog,
  Leaf,
  Battery,
  Lightbulb,
  ShieldCheck,
  HeartPulse,
  GraduationCap,
  UserPlus,
  LineChart,
  Scale,
  FileCheck,
  Building2,
  TrendingUp,
  ClipboardCheck,
  Target
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Metric {
  id: string;
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle?: string;
  details: string;
  trend?: number;
  target?: number;
  documents?: Document[];
}

export interface Document {
  name: string;
  description: string;
  url: string;
}

export interface MetricCategory {
  id: string;
  title: string;
  metrics: Metric[];
}

export const metrics: MetricCategory[] = [
  {
    id: 'environmental',
    title: 'Environmental Performance',
    metrics: [
      // Real data metrics
      {
        id: 'diesel',
        icon: Fuel,
        title: 'Diesel Consumption',
        value: '-9%',
        subtitle: 'in 2024 vs 2023',
        details: 'Reduction in diesel consumption through operational improvements and sustainable practices.',
        trend: -9,
        target: -12,
        documents: [
          {
            name: 'Diesel Consumption Report 2024',
            description: 'Monthly breakdown of diesel usage across facilities',
            url: '/documents/diesel-consumption-2024.pdf'
          },
          {
            name: 'Fuel Efficiency Analysis',
            description: 'Detailed analysis of fuel consumption patterns',
            url: '/documents/fuel-efficiency-2024.pdf'
          }
        ]
      },
      {
        id: 'scope1',
        icon: Wind,
        title: 'Scope 1 Emission',
        value: '-9%',
        subtitle: 'in 2024 vs 2023',
        details: 'Reduction in Scope 1 emissions (kg CO2e) through improved operational efficiency.',
        trend: -9,
        target: -12,
        documents: [
          {
            name: 'Emissions Audit 2024',
            description: 'Comprehensive emissions data analysis',
            url: '/documents/emissions-audit-2024.pdf'
          }
          /*,{
            name: 'Carbon Footprint Report',
            description: 'Detailed carbon footprint assessment',
            url: '/documents/carbon-footprint-2024.pdf'
          }*/
        ]
      },
      {
        id: 'water',
        icon: Droplet,
        title: 'Water Consumption',
        value: '-44%',
        subtitle: 'in 2024 vs 2023',
        details: 'Significant reduction in water consumption through recycling and efficiency measures.',
        trend: -44,
        target: -40,
        documents: [
          {
            name: 'Water Usage Report 2024',
            description: 'Detailed water consumption analysis',
            url: '/documents/water-usage-2024.pdf'
          },
          {
            name: 'Water Conservation Plan',
            description: 'Strategic initiatives for water conservation',
            url: 'https://drive.google.com/file/d/14aaO4mQenCYXjVebZlRqaCt4FWEpeIT6/view?usp=sharing'
          }
        ]
      },
      {
        id: 'materials',
        icon: Package,
        title: 'Raw Materials',
        value: '14.821K',
        subtitle: '2023 vs 2024',
        details: 'Total raw materials consumption with focus on sustainable sourcing.',
        trend: 5,
        target: 0,
        documents: [
          {
            name: 'Materials Inventory 2024',
            description: 'Complete inventory of raw materials usage',
            url: '/documents/materials-inventory-2024.pdf'
          },
          {
            name: 'Sustainable Materials Report',
            description: 'Analysis of sustainable material alternatives',
            url: '/documents/sustainable-materials-2024.pdf'
          }
        ]
      },
      {
        id: 'waste',
        icon: Trash2,
        title: 'Waste Intensity',
        value: '110M',
        subtitle: '2023 vs 2024',
        details: 'Waste generation intensity per unit of production.',
        trend: -15,
        target: -20,
        documents: [
          {
            name: 'Waste Management Report',
            description: 'Analysis of waste generation and disposal',
            url: '/documents/waste-management-2024.pdf'
          },
          {
            name: 'Zero Waste Initiative',
            description: 'Strategic plan for waste reduction',
            url: '/documents/zero-waste-2024.pdf'
          }
        ]
      },
      /*{
        id: 'reuse',
        icon: Recycle,
        title: 'Volume of Water Reused',
        value: '-3E+18',
        subtitle: 'Total volume reused',
        details: 'Volume of water recycled and reused in operations.',
        trend: 75,
        target: 80,
        documents: [
          {
            name: 'Water Recycling Report',
            description: 'Analysis of water recycling systems',
            url: '/documents/water-recycling-2024.pdf'
          },
          {
            name: 'Water Reuse Initiatives',
            description: 'Overview of water reuse programs',
            url: '/documents/water-reuse-2024.pdf'
          }
        ]
      },*/
      // Additional environmental metrics
      {
        id: 'energy-efficiency',
        icon: Battery,
        title: 'Energy Consumption Efficiency',
        value: '-15%',
        subtitle: 'kWh per unit of production',
        details: 'Improved energy efficiency through modernized equipment and better practices.',
        trend: -15,
        target: -20,
        documents: [
          {
            name: 'Energy Efficiency Report',
            description: 'Analysis of energy consumption patterns',
            url: '/documents/energy-efficiency-2024.pdf'
          },
          {
            name: 'Energy Management Plan',
            description: 'Strategic energy management initiatives',
            url: '/documents/energy-management-2024.pdf'
          }
        ]
      },
      {
        id: 'renewable',
        icon: Leaf,
        title: 'Renewable Energy Utilization',
        value: '35%',
        subtitle: 'of total energy consumption',
        details: 'Increasing share of renewable energy sources in our total energy mix.',
        trend: 35,
        target: 50,
        documents: [
          {
            name: 'Renewable Energy Report',
            description: 'Analysis of renewable energy usage',
            url: '/documents/renewable-energy-2024.pdf'
          },
          {
            name: 'Green Energy Strategy',
            description: 'Plan for increasing renewable energy adoption',
            url: '/documents/green-energy-2024.pdf'
          }
        ]
      }
    ]
  },
  {
    id: 'labor',
    title: 'Labor & Human Rights',
    metrics: [
      // Real data metrics
      {
        id: 'gender',
        icon: Users,
        title: 'Gender Distribution',
        value: 'Male: 94.6% | Female: 5.4%',
        subtitle: '2025',
        details: 'FY2025 gender distribution: 384 male and 22 female employees out of 406.',
        trend: 5.4,
        target: 25,
        documents: [
          {
            name: 'Gender Diversity Report',
            description: 'Analysis of gender distribution trends',
            url: '/documents/gender-diversity-2024.pdf'
          },
          {
            name: 'DEI Initiatives',
            description: 'Overview of diversity and inclusion programs',
            url: '/documents/dei-initiatives-2024.pdf'
          }
        ]
      },
      {
        id: 'identification',
        icon: UserCheck,
        title: 'Employee Origin',
        value: 'Local: 40.6% | Foreign: 59.4%',
        subtitle: '2025',
        details: 'FY2025 employee origin: 165 local and 241 foreign employees out of 406.',
        trend: 59.4,
        target: 50,
        documents: [
          {
            name: 'Workforce Demographics',
            description: 'Detailed analysis of employee demographics',
            url: '/documents/workforce-demographics-2024.pdf'
          },
          {
            name: 'Local Hiring Initiative',
            description: 'Strategy for local talent development',
            url: '/documents/local-hiring-2024.pdf'
          }
        ]
      },
      {
        id: 'employment',
        icon: UserCog,
        title: 'Employment Type',
        value: 'Permanent: 97.8% | Contract: 2.2%',
        subtitle: '2025',
        details: 'FY2025 employment type: 397 permanent and 9 contract employees out of 406.',
        trend: 97.8,
        target: 95,
        documents: [
          {
            name: 'Employment Status Report',
            description: 'Analysis of employment types and trends',
            url: '/documents/employment-status-2024.pdf'
          },
          {
            name: 'Workforce Planning',
            description: 'Strategic workforce planning document',
            url: '/documents/workforce-planning-2024.pdf'
          }
        ]
      },
      {
        id: 'turnover',
        icon: RefreshCw,
        title: 'Average Turnover Rate',
        value: '1.8%',
        subtitle: '2024 (1.6% in 2023)',
        details: 'Employee turnover rate showing slight increase but remaining within target range.',
        trend: 1.8,
        target: 2.0,
        documents: [
          {
            name: 'Turnover Analysis',
            description: 'Detailed analysis of employee turnover',
            url: '/documents/turnover-analysis-2024.pdf'
          },
          {
            name: 'Retention Strategy',
            description: 'Employee retention initiatives and programs',
            url: '/documents/retention-strategy-2024.pdf'
          }
        ]
      },
      {
        id: 'age',
        icon: Users,
        title: 'Age Distribution',
        value: 'Balanced across age groups',
        subtitle: '2025',
        details: 'FY2025 employee count by age: 18-19: 3, 20-25: 24, 26-30: 51, 31-35: 86, 36-40: 89, 41-45: 59, 46-50: 38, 51-55: 24, 56-60: 20, 61-65: 10, 66-70: 1, 71-75: 0, 76-80: 1.',
        documents: [
          {
            name: 'Age Demographics Report',
            description: 'Analysis of workforce age distribution',
            url: '/documents/age-demographics-2024.pdf'
          },
          {
            name: 'Generational Diversity',
            description: 'Strategy for managing multi-generational workforce',
            url: '/documents/generational-diversity-2024.pdf'
          }
        ]
      },
      // Additional labor metrics
      {
        id: 'safety',
        icon: HeartPulse,
        title: 'Health & Safety Incident Rate',
        value: '1.2',
        subtitle: 'incidents per 100 employees',
        details: 'Maintaining low incident rates through robust safety protocols.',
        trend: -25,
        target: -30,
        documents: [
          {
            name: 'Safety Incident Report',
            description: 'Analysis of workplace safety incidents',
            url: '/documents/safety-report-2024.pdf'
          },
          {
            name: 'Safety Improvement Plan',
            description: 'Strategic initiatives for workplace safety',
            url: '/documents/safety-plan-2024.pdf'
          }
        ]
      },
      {
        id: 'training',
        icon: GraduationCap,
        title: 'Sustainability Training',
        value: '24h',
        subtitle: 'average hours per employee',
        details: 'Comprehensive sustainability and ethics training program.',
        trend: 24,
        target: 30,
        documents: [
          {
            name: 'Training Report',
            description: 'Analysis of employee training programs',
            url: '/documents/training-report-2024.pdf'
          },
          {
            name: 'Training Strategy',
            description: 'Strategic plan for employee development',
            url: '/documents/training-strategy-2024.pdf'
          }
        ]
      }
    ]
  },
  {
    id: 'ethics',
    title: 'Ethics & Compliance',
    metrics: [
      {
        id: 'training-ethics',
        icon: ShieldCheck,
        title: 'Ethics Training Participation',
        value: '98%',
        subtitle: 'completion rate',
        details: 'High participation in anti-corruption and ethics training.',
        trend: 98,
        target: 100,
        documents: [
          {
            name: 'Ethics Training Report',
            description: 'Analysis of ethics training completion',
            url: '/documents/ethics-training-2024.pdf'
          },
          {
            name: 'Ethics Program Overview',
            description: 'Comprehensive ethics training curriculum',
            url: '/documents/ethics-program-2024.pdf'
          }
        ]
      },
      {
        id: 'resolution',
        icon: ClipboardCheck,
        title: 'Ethics Incident Resolution',
        value: '95%',
        subtitle: 'resolution rate',
        details: 'Efficient handling and resolution of ethics incidents.',
        trend: 95,
        target: 100,
        documents: [
          {
            name: 'Incident Resolution Report',
            description: 'Analysis of ethics incident handling',
            url: '/documents/incident-resolution-2024.pdf'
          },
          {
            name: 'Ethics Response Protocol',
            description: 'Standard procedures for handling incidents',
            url: '/documents/ethics-protocol-2024.pdf'
          }
        ]
      }
    ]
  },
  {
    id: 'procurement',
    title: 'Sustainable Procurement',
    metrics: [
      {
        id: 'suppliers',
        icon: Building2,
        title: 'Sustainable Suppliers',
        value: '76%',
        subtitle: 'meeting sustainability criteria',
        details: 'Growing number of suppliers meeting our sustainability standards.',
        trend: 76,
        target: 85,
        documents: [
          {
            name: 'Supplier Assessment Report',
            description: 'Analysis of supplier sustainability performance',
            url: '/documents/supplier-assessment-2024.pdf'
          },
          {
            name: 'Supplier Development Program',
            description: 'Strategy for improving supplier sustainability',
            url: '/documents/supplier-development-2024.pdf'
          }
        ]
      },
      {
        id: 'spend',
        icon: Scale,
        title: 'Sustainable Spend Ratio',
        value: '68%',
        subtitle: 'of total procurement',
        details: 'Increasing focus on sustainable products and services.',
        trend: 68,
        target: 75,
        documents: [
          {
            name: 'Sustainable Procurement Report',
            description: 'Analysis of sustainable spending patterns',
            url: '/documents/sustainable-spend-2024.pdf'
          },
          {
            name: 'Green Procurement Strategy',
            description: 'Plan for increasing sustainable procurement',
            url: '/documents/green-procurement-2024.pdf'
          }
        ]
      },
      {
        id: 'improvement',
        icon: TrendingUp,
        title: 'Supplier Improvement Score',
        value: '3.8/5',
        subtitle: 'average rating',
        details: 'Continuous improvement in supplier sustainability performance.',
        trend: 76,
        target: 80,
        documents: [
          {
            name: 'Supplier Performance Report',
            description: 'Analysis of supplier improvement trends',
            url: '/documents/supplier-performance-2024.pdf'
          },
          {
            name: 'Supplier Excellence Program',
            description: 'Framework for supplier development',
            url: '/documents/supplier-excellence-2024.pdf'
          }
        ]
      }
    ]
  },
  {
    id: 'improvement',
    title: 'Corrective Action & Improvement',
    metrics: [
      {
        id: 'completion',
        icon: Target,
        title: 'Corrective Action Completion',
        value: '89%',
        subtitle: 'on-time completion',
        details: 'Strong progress in implementing corrective actions.',
        trend: 89,
        target: 95,
        documents: [
          {
            name: 'Corrective Action Report',
            description: 'Analysis of action completion rates',
            url: '/documents/corrective-action-2024.pdf'
          },
          {
            name: 'Action Tracking System',
            description: 'Overview of action monitoring process',
            url: '/documents/action-tracking-2024.pdf'
          }
        ]
      },
      {
        id: 'trend',
        icon: FileCheck,
        title: 'Overall Improvement Trend',
        value: '+12%',
        subtitle: 'year-over-year',
        details: 'Consistent improvement across all sustainability areas.',
        trend: 12,
        target: 15,
        documents: [
          {
            name: 'Improvement Trend Analysis',
            description: 'Comprehensive performance analysis',
            url: '/documents/improvement-trend-2024.pdf'
          },
          {
            name: 'Strategic Improvement Plan',
            description: 'Long-term improvement strategy',
            url: '/documents/strategic-plan-2024.pdf'
          }
        ]
      }
    ]
  }
];