export interface KPICard {
  title: string;
  value: string;
  unit?: string;
  trend?: number;
}

export interface ChartData {
  labels: string[];
  data: number[];
  colors?: string[];
}

export interface Section {
  id: string;
  title: string;
  pages: Page[];
}

export interface Page {
  id: string;
  title: string;
  content: any;
}

export const bhsColors = {
  primaryDark: '#0A2640',
  accentOrange: '#FF6E3C',
  esgGreen: '#00A676',
  neutralGrey: '#6E7A87',
  white: '#FFFFFF'
};

export const kpiCards: KPICard[] = [
  {
    title: 'Scope 1+2 Emissions',
    value: '3,212.69',
    unit: 'tCO₂e',
    trend: -7.7
  },
  {
    title: 'Total Employees',
    value: '406',
    trend: 4.6
  },
  {
    title: 'Total Waste (2024)',
    value: '10,048.84',
    unit: 'kg',
    trend: 40.9
  },
  {
    title: 'Flexi Benefits Distributed',
    value: 'SGD 31,957.29',
    trend: 12.3
  }
];

export const ghgEmissions = {
  scope1: 1403.90,
  scope2: 308.49,
  scope3: 7616.29,
  total: 9328.68
};

export const ghgEmissions3Y = {
  2024: { scope1: 1403.9, scope2: 308.49, scope3: 7616.29 },
  2025: { scope1: 2569.72, scope2: 1291.24, scope3: 4289.48 }
};

export const ghgTotals3Y = {
  2024: 9328.68,
  2025: 8150.44
};

export const quarterlyPerformance = {
  quarters: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
  actual: [780.40, 826.46, 816.73, 664.82],
  baseline: 837.06
};

export const dieselConsumption = {
  2023: 1177419,
  2024: 1075630,
  2025: 965137
};

export const wasteData = {
  2023: 7132.63,
  2024: 10048.84,
  woodWaste2024: 9846.40,
  nonWoodWaste2024: 202.43
};

export const airPollutants = {
  NOx: 11.63,
  PM25: 0.43,
  SO2: 2.47,
  VOC: 1.50,
  CO: 6.45
};

export const workforceData = {
  totalEmployees: 406,
  femalePercentage: 5.4,
  localWorkforce: 40.6,
  incidents2023: 42,
  incidents2024: 35,
  incidents2025: 28
};

export const trainingData = {
  flexiBenefits: 31957.29,
  sdl: 6675,
  antiBriberyTrained: 62,
  trainingHours: 248,
  promotions: 6
};

export const grievanceData = {
  total: 3,
  resolved: 3,
  resolutionRate: 100
};

export const genderData = {
  2023: { male: 90.8, female: 9.2 },
  2024: { male: 89.2, female: 10.8 },
  2025: { male: 94.6, female: 5.4 }
};

export const pmetData = {
  2023: {
    professional: 10.80,
    management: 12.27,
    executive: 18.21,
    technical: 16.74,
    others: 41.99
  },
  2024: {
    professional: 10.80,
    management: 12.27,
    executive: 18.21,
    technical: 16.74,
    others: 41.99
  }
};

export const sustainabilityTargets = [
  {
    category: 'Scope 1',
    target: '-2.5% annually',
    timeline: '2024-2030'
  },
  {
    category: 'Scope 2',
    target: '-15% by 2028',
    timeline: '2024-2028'
  },
  {
    category: 'Scope 3 Travel',
    target: '-30% by 2030',
    timeline: '2024-2030'
  },
  {
    category: 'Female Workforce',
    target: '≥18%',
    timeline: '2025'
  },
  {
    category: 'Incident Reduction',
    target: '≥10% annually',
    timeline: '2024-2030'
  },
  {
    category: 'Ethics Training',
    target: '100% by 2027',
    timeline: '2024-2027'
  }
];

export const ethicsTrainingRoadmap = {
  2024: 16,
  2025: 40,
  2026: 70,
  2027: 100
};

// ======================================================
// 🔹 EXTENDED ENVIRONMENT DATA (2023–2025)
// (Non-breaking addition)
// ======================================================

export interface MonthlyThreeYearData {
  month: string;
  y2023: number;
  y2024: number;
  y2025: number;
}

// =============================
// 🌿 Monthly Waste Breakdown (Tonnes)
// =============================

export const wasteMonthlyData3Y: MonthlyThreeYearData[] = [
  { month: "January", y2023: 226, y2024: 450, y2025: 963 },
  { month: "February", y2023: 518, y2024: 415, y2025: 865 },
  { month: "March", y2023: 870, y2024: 552, y2025: 1018 },
  { month: "April", y2023: 827, y2024: 453, y2025: 935 },
  { month: "May", y2023: 874, y2024: 710, y2025: 913 },
  { month: "June", y2023: 481, y2024: 1267, y2025: 801 },
  { month: "July", y2023: 649, y2024: 1157, y2025: 883 },
  { month: "August", y2023: 553, y2024: 812, y2025: 680 },
  { month: "September", y2023: 541, y2024: 1005, y2025: 969 },
  { month: "October", y2023: 574, y2024: 1222, y2025: 1204 },
  { month: "November", y2023: 577, y2024: 1030, y2025: 1788 },
  { month: "December", y2023: 448, y2024: 982, y2025: 2071 }
];

export const wasteTotals3Y = {
  2023: 7133,
  2024: 10049,
  2025: 13084
};

// =============================
// ⚡ Energy Consumption (kWh)
// =============================

export const energyMonthlyData3Y: MonthlyThreeYearData[] = [
  { month: "January", y2023: 153648, y2024: 120605, y2025: 211661.9 },
  { month: "February", y2023: 123214, y2024: 234104, y2025: 185190.69 },
  { month: "March", y2023: 152829, y2024: 269003, y2025: 192782.28 },
  { month: "April", y2023: 160295, y2024: 290889, y2025: 217866.73 },
  { month: "May", y2023: 182185, y2024: 272815, y2025: 218951.99 },
  { month: "June", y2023: 179397, y2024: 254910, y2025: 264502.96 },
  { month: "July", y2023: 163207, y2024: 181611, y2025: 294941.62 },
  { month: "August", y2023: 183410, y2024: 273842, y2025: 279547.73 },
  { month: "September", y2023: 168998.5, y2024: 257372.45, y2025: 262743.2 },
  { month: "October", y2023: 180490.5, y2024: 225883.02, y2025: 271906.45 },
  { month: "November", y2023: 209529, y2024: 243046.08, y2025: 267264.92 },
  { month: "December", y2023: 235528, y2024: 285615.41, y2025: 260444.62 }
];

export const energyTotals3Y = {
  2023: 2092731,
  2024: 2909695.96,
  2025: 2927805.09
};

// =============================
// ☀ Solar Energy (kWh)
// =============================

export const solarMonthlyData3Y: MonthlyThreeYearData[] = [
  { month: "January", y2023: 23950, y2024: 23861, y2025: 22179.14 },
  { month: "February", y2023: 25591, y2024: 29232, y2025: 27985.6 },
  { month: "March", y2023: 29562, y2024: 32014, y2025: 26118.85 },
  { month: "April", y2023: 29306, y2024: 27980, y2025: 28577.6 },
  { month: "May", y2023: 30841, y2024: 27676, y2025: 28775.49 },
  { month: "June", y2023: 27453, y2024: 25163, y2025: 27026.24 },
  { month: "July", y2023: 26617, y2024: 29925, y2025: 19156.42 },
  { month: "August", y2023: 31164, y2024: 29935, y2025: 17182.08 },
  { month: "September", y2023: 31234, y2024: 30147, y2025: 22520.06 },
  { month: "October", y2023: 32698, y2024: 20790, y2025: 30641.92 },
  { month: "November", y2023: 25859, y2024: 32025, y2025: 26292.16 },
  { month: "December", y2023: 22985, y2024: 26346, y2025: 24608.83 }
];

export const solarTotals3Y = {
  2023: 337260,
  2024: 335094,
  2025: 301064.39
};

// =============================
// 💧 Water Consumption (Cu M)
// =============================

export const waterMonthlyData3Y: MonthlyThreeYearData[] = [
  { month: "January", y2023: 2069, y2024: 1949, y2025: 1017 },
  { month: "February", y2023: 1750, y2024: 2083, y2025: 1048 },
  { month: "March", y2023: 1967, y2024: 2093, y2025: 956 },
  { month: "April", y2023: 1883, y2024: 2298, y2025: 1041 },
  { month: "May", y2023: 2373, y2024: -289, y2025: 1026 },
  { month: "June", y2023: 2028, y2024: 868, y2025: 1162 },
  { month: "July", y2023: 1955, y2024: 1064, y2025: 1092 },
  { month: "August", y2023: 1924, y2024: 1008, y2025: 1033 },
  { month: "September", y2023: 1780, y2024: 973, y2025: 1090 },
  { month: "October", y2023: 2099, y2024: 1170, y2025: 1038 },
  { month: "November", y2023: 1831, y2024: 1139, y2025: 954 },
  { month: "December", y2023: 1920, y2024: 1216, y2025: 1189 }
];

export const waterTotals3Y = {
  2023: 23580,
  2024: 15571,
  2025: 12646
};

// ======================================================
// 👥 EXTENDED WORKFORCE (3-YEAR STRUCTURE)
// ======================================================

export const workforceGender3Y = {
  2023: { female: 34, male: 334, total: 368 },
  2024: { female: 42, male: 346, total: 388 },
  2025: { female: 22, male: 384, total: 406 }
};

export const nationalityPercentage = [
  { name: 'Singaporean', value: 38 },
  { name: 'Malaysian', value: 32 },
  { name: 'Chinese', value: 13 },
  { name: 'Indian', value: 7 },
  {
    name: 'Others (Bangladeshi, Vietnamese, Taiwanese, Burmese, Filipino, Indonesian)',
    value: 10
  }
];


export const workforceIdentification3Y = {
  2023: { local: 181, foreigner: 187, total: 368 },
  2024: { local: 172, foreigner: 216, total: 388 },
  2025: { local: 165, foreigner: 241, total: 406 }
};

export const workforceEmploymentType3Y = {
  2023: { permanent: 366, contract: 2, total: 368 },
  2024: { permanent: 386, contract: 2, total: 388 },
  2025: { permanent: 397, contract: 9, total: 406 }
};

export const workforceAgeGroup3Y = {
  2023: { "18-19": 0, "20-25": 15, "26-30": 54, "31-35": 67, "36-40": 83, "41-45": 51, "46-50": 37, "51-55": 27, "56-60": 26, "61-65": 6, "66-70": 1, "71-75": 0, "76-80": 1, total: 368 },
  2024: { "18-19": 0, "20-25": 22, "26-30": 68, "31-35": 69, "36-40": 88, "41-45": 51, "46-50": 35, "51-55": 22, "56-60": 25, "61-65": 6, "66-70": 1, "71-75": 0, "76-80": 1, total: 388 },
  2025: { "18-19": 3, "20-25": 24, "26-30": 51, "31-35": 86, "36-40": 89, "41-45": 59, "46-50": 38, "51-55": 24, "56-60": 20, "61-65": 10, "66-70": 1, "71-75": 0, "76-80": 1, total: 406 }
};

const publicAsset = (filename: string) =>
  `${import.meta.env.BASE_URL}${filename}`;

export const documents = {
  ghgInventory2024: publicAsset('BHS-IMS-ECO-37_-_GHG_EMISSIONS_INVENTORY_REPORT_2024.pdf'),
  ghgInventory2025: publicAsset('BHS-IMS-ECO-37_GHG_Emissions_Inventory_Report_FY2025_20261119.pdf'),
  ghgVerification2025: publicAsset('BHS-GHG-Emissions-Inventory-Verification-Report-FY2025-Signed.pdf'),
  reductionPlan: publicAsset('BHS-IMS-ECO-34-ESG-GHG-Reduction-Plan.pdf'),
  livingWage: publicAsset('BHS-IMS-ECO-36_-_LIVING_WAGE_MEASURES.pdf'),
  wasteReport: publicAsset('BHS-IMS-ECO-35_-_NON_HAZARDOUS_WASTE_INVENTORY_REPORT.pdf'),
  airPollutant: publicAsset('BHS-IMS-ECO-38_-_AIR_POLLUTANT_INVENTORY_REPORT_2024.pdf'),
  esgReporting: publicAsset('BHS-IMS-ECO-33_-_ENVIRONMENTAL,_LABOUR_AND_HUMAN_RIGHTS,_ETHICS_REPORTING.pdf'),
  environmentalprincipalendorsment: publicAsset('BHS_Environmental_Principles_Endorsement_Statement.pdf'),
  airpollutant: publicAsset('BHS-IMS-ECO-38_-_AIR_POLLUTANT_INVENTORY_REPORT_2024.pdf')
}
