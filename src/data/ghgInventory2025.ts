export interface Scope3Category {
  category: number;
  description: string;
  emissions: number;
  method: string;
  sources?: Array<{ label: string; emissions: number }>;
  details?: string[];
}

export const ghgInventory2025 = {
  reportingYear: 2025,
  scope1: 2569.72,
  scope2Location: 1291.24,
  scope2Market: 1291.24,
  scope1And2: 3860.96,
  scope3: 4289.48,
  total: 8150.44,
  dieselLitres: 965137,
  gridKwh: 2927805.09,
  solarKwh: 301064.39,
  scope3Categories: [
    {
      category: 1,
      description: 'Purchased goods and services',
      emissions: 684.90,
      method: 'Spend-based calculation using FY2025 Finance expenditure and country/regional average emission-factor proxies.',
      sources: [
        { label: 'Warehouse supplies', emissions: 33.10 },
        { label: 'Tyres and vehicle parts', emissions: 174.17 },
        { label: 'PPE and safety equipment', emissions: 44.08 },
        { label: 'Packaging materials', emissions: 365.83 },
        { label: 'IT software / professional services', emissions: 15.60 },
        { label: 'Insurance / professional services', emissions: 48.31 },
        { label: 'Telecommunications', emissions: 3.81 }
      ],
      details: ['Detailed supplier expenditure and confidential Finance spend amounts are not disclosed publicly.']
    },
    {
      category: 2,
      description: 'Capital goods',
      emissions: 1223.80,
      method: 'Spend-based estimates using FY2025 additions recorded in the audited PPE schedule.',
      sources: [
        { label: 'Construction in progress', emissions: 293.51 },
        { label: 'Motor vehicles', emissions: 675.50 },
        { label: 'Plant and equipment', emissions: 254.79 }
      ]
    },
    {
      category: 3,
      description: 'Fuel and energy-related activities',
      emissions: 878.52,
      method: 'Calculated using upstream fuel and electricity proxies. Direct combustion and purchased electricity emissions remain in Scopes 1 and 2.',
      sources: [
        { label: 'Upstream emissions of purchased fuels', emissions: 589.70 },
        { label: 'Upstream emissions of purchased electricity', emissions: 278.40 },
        { label: 'Transmission and distribution losses', emissions: 10.42 },
        { label: 'Purchased electricity sold to end users', emissions: 0 }
      ],
      details: [
        'Upstream diesel factor: 0.611 kgCO2e/litre.',
        'Interim upstream electricity factor: 0.09509 kgCO2e/kWh.',
        'Estimated electricity losses: 20,971.70 kWh using the 0.7112% Singapore national T&D loss rate.',
        'The upstream electricity factor is an interim proxy, not a verified Singapore-specific upstream-only factor.'
      ]
    },
    {
      category: 4,
      description: 'Upstream transportation and distribution',
      emissions: 719.78,
      method: 'Spend-based estimate using FY2025 third-party transportation expenditure.',
      details: [
        'Detailed consolidated data on vehicle fuel, transport mode, vehicle type, distance and tonne-kilometres was unavailable.',
        'The spend-based proxy may not fully reflect supplier-specific transport operations.'
      ]
    },
    {
      category: 5,
      description: 'Waste generated in operations',
      emissions: 110.69,
      method: 'Estimated treatment-route factors applied to available FY2025 waste quantities.',
      sources: [
        { label: 'Wooden waste recovered for recycling', emissions: 87.28 },
        { label: 'Non-recyclable wooden waste disposal', emissions: 9.67 },
        { label: 'General rubbish', emissions: 13.74 }
      ],
      details: [
        'Wooden waste: 12,722.33 tonnes; general rubbish: 361.696 tonnes.',
        'Approximately 98% historical recycling and 2% WTE/disposal used as proxies.',
        'Recycling factor: 7 kgCO2e/tonne; WTE/disposal factor: 38 kgCO2e/tonne.',
        'Actual treatment-route information from waste contractors should be used when available.'
      ]
    },
    {
      category: 6,
      description: 'Business travel',
      emissions: 555.12,
      method: 'Estimates based on travel records and representative proxies where actual routes and cabin classes were unavailable.',
      sources: [
        { label: 'International air travel', emissions: 476.90 },
        { label: 'Hotel accommodation', emissions: 73.60 },
        { label: 'Rental cars', emissions: 3.33 },
        { label: 'Taxi and ride-hailing', emissions: 1.29 }
      ],
      details: [
        '181 identified return-trip entries; estimated passenger distance 2,905,280 passenger-km.',
        'Air travel: 414.09 tCO2e direct plus 62.81 tCO2e upstream fuel.',
        'Nine travel entries remain excluded pending destination reconciliation.',
        'Estimated 2,703 room-nights using SGD 200/room-night and 27.2271 kgCO2e/room-night.',
        'Rental cars: 204.63 days, 100 km/day, 20,463 vehicle-km and 0.16272 kgCO2e/vehicle-km.'
      ]
    },
    {
      category: 7,
      description: 'Employee commuting',
      emissions: 116.67,
      method: 'Estimated from employee, distance and working-day information using generic travel factors.',
      sources: [
        { label: 'Drivers using personal transportation', emissions: 13.59 },
        { label: 'Private cars', emissions: 14.90 },
        { label: 'Public transport', emissions: 88.18 }
      ],
      details: [
        'Personal transportation: 10 employees, 30 km round trip, 302 working days, 0.15 kgCO2e/vehicle-km.',
        'Private cars: 12 employees, 30 km round trip, 276 working days, 0.15 kgCO2e/vehicle-km.',
        'Public transport: 213 employees, 30 km round trip, 276 working days, 0.05 kgCO2e/passenger-km.',
        'Approximately 120 truck drivers commute in BHS-controlled vehicles; this fuel is included in Scope 1.',
        'Normal commuting for Build-It engineers was not separately quantified in this preliminary calculation.'
      ]
    },
    {
      category: 8,
      description: 'Upstream leased assets',
      emissions: 0,
      method: 'No additional operational emissions identified outside BHS operational-control boundary.',
      details: ['Rented warehouse electricity and operations are included in Scope 1 and Scope 2 where applicable.']
    },
    {
      category: 9,
      description: 'Downstream transportation and distribution',
      emissions: 0,
      method: 'Factory and export movements use BHS-owned or controlled vehicles.',
      details: ['Associated fuel is reported under Scope 1. Move Department activities are service delivery, not downstream distribution of products sold.']
    },
    {
      category: 10,
      description: 'Processing of sold products',
      emissions: 0,
      method: 'No sold intermediate products requiring further industrial processing were identified.',
      details: ['Wooden crates are supplied as finished products.']
    },
    {
      category: 11,
      description: 'Use of sold products',
      emissions: 0,
      method: 'Wooden crates do not directly consume fuel or electricity during intended use.'
    },
    {
      category: 12,
      description: 'End-of-life treatment of sold products',
      emissions: 0,
      method: 'Zero is currently reported, but customer-held wooden crate end-of-life treatment is still being assessed.',
      details: ['Do not interpret this zero as a conclusive finding of actual zero emissions.']
    },
    {
      category: 13,
      description: 'Downstream leased assets',
      emissions: 0,
      method: 'No BHS-owned vehicles, warehouses, forklifts or equipment are leased to third parties.'
    },
    {
      category: 14,
      description: 'Franchises',
      emissions: 0,
      method: 'BHS does not operate a franchise business model.'
    },
    {
      category: 15,
      description: 'Investments',
      emissions: 0,
      method: 'Subsidiaries are 100% owned and consolidated under the operational-control approach.',
      details: ['No separate emissions are allocated in this category because subsidiaries are included in the organisational boundary.']
    }
  ] satisfies Scope3Category[]
};
