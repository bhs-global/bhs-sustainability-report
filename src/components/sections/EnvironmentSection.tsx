import React, { useState } from 'react';
import {
  bhsColors,
  ghgEmissions,
  quarterlyPerformance,
  dieselConsumption,
  wasteData,
  airPollutants,
  documents,
  wasteMonthlyData3Y,
  wasteTotals3Y,
  energyMonthlyData3Y,
  energyTotals3Y,
  solarMonthlyData3Y,
  solarTotals3Y,
  waterMonthlyData3Y,
  waterTotals3Y,
  ghgEmissions3Y,
  ghgTotals3Y
} from '../../data/bhsData';
import BarChart from '../charts/BarChart';
import { Download, Target, TrendingDown, Leaf, Wind, Droplets } from 'lucide-react';
import { ghgInventory2025 } from '../../data/ghgInventory2025';


const EnvironmentSection: React.FC = () => {
  const [activePage, setActivePage] = useState(0);

  // months array (use energy as canonical - all 3Y arrays have same months)
  const months = energyMonthlyData3Y.map((m) => m.month);

  // helpers to fetch month-value by year and index
  const energyValue = (year: 2023 | 2024 | 2025, idx: number) =>
    year === 2023 ? energyMonthlyData3Y[idx].y2023 : year === 2024 ? energyMonthlyData3Y[idx].y2024 : energyMonthlyData3Y[idx].y2025;

  const solarValue = (year: 2023 | 2024 | 2025, idx: number) =>
    year === 2023 ? solarMonthlyData3Y[idx].y2023 : year === 2024 ? solarMonthlyData3Y[idx].y2024 : solarMonthlyData3Y[idx].y2025;

  const waterValue = (year: 2023 | 2024 | 2025, idx: number) =>
    year === 2023 ? waterMonthlyData3Y[idx].y2023 : year === 2024 ? waterMonthlyData3Y[idx].y2024 : waterMonthlyData3Y[idx].y2025;

  const totalReduction =
((dieselConsumption[2025] - dieselConsumption[2023]) / dieselConsumption[2023]) * 100;

  // Split content into more manageable sub-sections
  const pages = [
    {
      title: 'Climate Strategy',
      content: (
        <div className="space-y-6 md:space-y-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4" style={{ color: bhsColors.primaryDark }}>
              Climate Strategy & Targets
            </h2>
            <p className="text-sm md:text-xl text-gray-600 px-4">
              Our commitment to reducing greenhouse gas emissions across all scopes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-l-4" style={{ borderLeftColor: bhsColors.esgGreen }}>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Target className="w-6 h-6 md:w-8 md:h-8" style={{ color: bhsColors.esgGreen }} />
                <h3 className="text-lg md:text-xl font-semibold">Scope 1</h3>
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: bhsColors.esgGreen }}>
                -2.5%
              </div>
              <p className="text-gray-600 text-sm md:text-base">annually</p>
              <div className="mt-3 md:mt-4 text-xs md:text-sm text-gray-500">2024-2030</div>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-l-4" style={{ borderLeftColor: bhsColors.accentOrange }}>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Target className="w-6 h-6 md:w-8 md:h-8" style={{ color: bhsColors.accentOrange }} />
                <h3 className="text-lg md:text-xl font-semibold">Scope 2</h3>
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: bhsColors.accentOrange }}>
                -15%
              </div>
              <p className="text-gray-600 text-sm md:text-base">by 2028</p>
              <div className="mt-3 md:mt-4 text-xs md:text-sm text-gray-500">2024-2028</div>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border-l-4" style={{ borderLeftColor: bhsColors.primaryDark }}>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Target className="w-6 h-6 md:w-8 md:h-8" style={{ color: bhsColors.primaryDark }} />
                <h3 className="text-lg md:text-xl font-semibold">Scope 3 Travel</h3>
              </div>
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: bhsColors.primaryDark }}>
                -30%
              </div>
              <p className="text-gray-600 text-sm md:text-base">by 2030</p>
              <div className="mt-3 md:mt-4 text-xs md:text-sm text-gray-500">2024-2030</div>
            </div>
          </div>

          {/* Timeline graphic */}
          <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg">
            <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-center">Emission Reduction Timeline</h3>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
              <div className="space-y-4 md:space-y-6 ml-4 md:ml-8">
                {[
                  { year: '2024', milestone: 'Baseline establishment & monitoring systems' },
                  { year: '2025', milestone: 'Scope 1 reduction initiatives implementation' },
                  { year: '2026', milestone: 'Fleet optimization & efficiency programs' },
                  { year: '2028', milestone: 'Scope 2 target achievement (-15%)' },
                  { year: '2030', milestone: 'Scope 3 travel target achievement (-30%)' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-4">
                    <div
                      className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 md:border-4 border-white shadow-lg flex-shrink-0"
                      style={{ backgroundColor: bhsColors.esgGreen }}
                    ></div>
                    <div>
                      <div className="font-semibold text-base md:text-lg">{item.year}</div>
                      <div className="text-gray-600 text-xs md:text-sm">{item.milestone}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },

  {
  title: 'GHG Emissions',
  content: (
    <div className="space-y-6 md:space-y-8">

      {/* ===== Years (Dynamic) ===== */}
      {(() => {
        const years = Object.keys(ghgEmissions3Y)
          .map(Number)
          .sort((a, b) => a - b);

        return (
          <>
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h2
                className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 px-4"
                style={{ color: bhsColors.primaryDark }}
              >
                GHG Emissions Inventory
              </h2>
              <p className="text-sm md:text-xl text-gray-600 px-4">
                Year-wise greenhouse gas emissions across all scopes
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

                {/* ================= TABLE ================= */}
                <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-gray-200 rounded-lg">
                  <table className="w-full border-collapse border border-gray-300 text-[10px] md:text-xs">

                    {/* Header */}
                    <thead className="sticky top-0 bg-gray-100 z-10">
                      <tr>
                        <th className="border border-gray-300 px-2 py-1 text-left font-semibold">
                          Scope
                        </th>

                        {years.map((year) => (
                          <th
                            key={year}
                            className="border border-gray-300 px-2 py-1 text-center font-semibold"
                          >
                            {year}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    {/* Body */}
                    <tbody>

                      {/* Scope 1 */}
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-2 py-1 font-medium">
                          Scope 1
                        </td>
                        {years.map((year) => (
                          <td key={year} className="border border-gray-300 px-2 py-1 text-center">
                            {ghgEmissions3Y[year]?.scope1?.toLocaleString() || '-'}
                          </td>
                        ))}
                      </tr>

                      {/* Scope 2 */}
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-2 py-1 font-medium">
                          Scope 2
                        </td>
                        {years.map((year) => (
                          <td key={year} className="border border-gray-300 px-2 py-1 text-center">
                            {ghgEmissions3Y[year]?.scope2?.toLocaleString() || '-'}
                          </td>
                        ))}
                      </tr>

                      {/* Scope 3 */}
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-2 py-1 font-medium">
                          Scope 3
                        </td>
                        {years.map((year) => (
                          <td key={year} className="border border-gray-300 px-2 py-1 text-center">
                            {ghgEmissions3Y[year]?.scope3?.toLocaleString() || '-'}
                          </td>
                        ))}
                      </tr>

                      {/* Total */}
                      <tr className="bg-blue-50 font-bold sticky bottom-0">
                        <td className="border border-gray-300 px-2 py-1">
                          Total
                        </td>
                        {years.map((year) => (
                          <td key={year} className="border border-gray-300 px-2 py-1 text-center">
                            {ghgTotals3Y[year]?.toLocaleString() || '-'}
                          </td>
                        ))}
                      </tr>

                    </tbody>
                  </table>
                </div>

                {/* ================= CHART ================= */}
                <div className="flex items-center justify-center w-full">
                  <BarChart
                    title="GHG Emissions by Scope (tCO₂e)"
                    grouped
                    data={years.map((year) => ({
                      label: String(year),
                      scope1: ghgEmissions3Y[year]?.scope1 || 0,
                      scope2: ghgEmissions3Y[year]?.scope2 || 0,
                      scope3: ghgEmissions3Y[year]?.scope3 || 0
                    }))}
                    series={[
                      { key: 'scope1', label: 'Scope 1', color: bhsColors.esgGreen },
                      { key: 'scope2', label: 'Scope 2', color: bhsColors.accentOrange },
                      { key: 'scope3', label: 'Scope 3', color: bhsColors.neutralGrey }
                    ]}
                    height={400}
                  />
                </div>

              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Scope 1', value: ghgInventory2025.scope1, color: bhsColors.esgGreen },
                { label: 'Scope 2', value: ghgInventory2025.scope2Location, color: bhsColors.accentOrange },
                { label: 'Scope 3', value: ghgInventory2025.scope3, color: bhsColors.primaryDark },
                { label: 'Total GHG emissions', value: ghgInventory2025.total, color: bhsColors.neutralGrey }
              ].map((card) => (
                <div key={card.label} className="bg-white rounded-xl p-5 shadow-lg border-t-4" style={{ borderTopColor: card.color }}>
                  <div className="text-sm text-gray-600">{card.label}</div>
                  <div className="text-2xl font-bold mt-1" style={{ color: card.color }}>{card.value.toFixed(2)} tCO₂e</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-lg">
                <div className="text-sm text-gray-600">Scope 1 + Scope 2</div>
                <div className="text-2xl font-bold mt-1" style={{ color: bhsColors.esgGreen }}>{ghgInventory2025.scope1And2.toFixed(2)} tCO₂e</div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-lg">
                <div className="text-sm text-gray-600">Scope 2 reporting</div>
                <div className="text-sm mt-2">Location-based: <strong>{ghgInventory2025.scope2Location.toFixed(2)} tCO₂e</strong></div>
                <div className="text-sm">Market-based: <strong>{ghgInventory2025.scope2Market.toFixed(2)} tCO₂e</strong></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-4">FY2025 Scope 3 category breakdown</h3>
              <div className="space-y-6">
                <BarChart
                  title="Reported Scope 3 Categories (tCO₂e)"
                  data={ghgInventory2025.scope3Categories
                    .filter((category) => category.emissions > 0)
                    .map((category) => ({
                      label: `Category ${category.category}`,
                      value: category.emissions,
                      color: category.category === 1 ? bhsColors.esgGreen : category.category === 2 ? bhsColors.accentOrange : bhsColors.primaryDark
                    }))}
                  height={360}
                />
                <div className="border border-gray-200 rounded-lg divide-y">
                  {ghgInventory2025.scope3Categories.map((category) => (
                    <details key={category.category} className="p-3">
                      <summary className="cursor-pointer flex justify-between gap-3 font-normal">
                        <span>Category {category.category} – {category.description}</span>
                        <span className="whitespace-nowrap">{category.emissions.toFixed(2)} tCO₂e</span>
                      </summary>
                      <div className="mt-3 space-y-2 text-xs md:text-sm text-gray-700">
                        <p><strong>Method:</strong> {category.method}</p>
                        {category.sources && (
                          <div className="space-y-1">
                            {category.sources.map((source) => (
                              <div key={source.label} className="flex justify-between gap-3">
                                <span>{source.label}</span>
                                <span className="font-medium whitespace-nowrap">{source.emissions.toFixed(2)} tCO₂e</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {category.details?.map((detail) => <p key={detail}>{detail}</p>)}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-500">The seven reported categories sum to 4,289.48 tCO₂e. Categories 8–15 are disclosed with a limitation or boundary explanation.</p>
            </div>

            {/* ================= DOCUMENTS ================= */}
            <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
                Supporting Documentation
              </h3>

              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                <a
                  href={documents.airpollutant}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity text-xs md:text-sm w-full md:w-auto justify-center"
                  style={{ backgroundColor: bhsColors.esgGreen }}
                >
                  <Download className="w-3 h-3 md:w-4 md:h-4" />
                  AIR POLLUTANT INVENTORY REPORT
                </a>

                <a
                  href={documents.ghgInventory2024}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity text-xs md:text-sm w-full md:w-auto justify-center"
                  style={{ backgroundColor: bhsColors.esgGreen }}
                >
                  <Download className="w-3 h-3 md:w-4 md:h-4" />
                  GHG EMISSIONS INVENTORY REPORT 2024
                </a>
                 <a
                  href={documents.ghgInventory2025}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity text-xs md:text-sm w-full md:w-auto justify-center"
                  style={{ backgroundColor: bhsColors.esgGreen }}
                >
                  <Download className="w-3 h-3 md:w-4 md:h-4" />
                  GHG EMISSIONS INVENTORY REPORT 2025
                </a>
              </div>
            </div>
          </>
        );
      })()}
    </div>
  )
},

    {
      title: 'Diesel & Fleet',
      content: (
        <div className="space-y-6 md:space-y-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4" style={{ color: bhsColors.primaryDark }}>
              Diesel & Fleet Performance
            </h2>
            <p className="text-sm md:text-xl text-gray-600 px-4">
              Fuel consumption trends and optimization strategies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-lg border-l-4" style={{ borderLeftColor: bhsColors.esgGreen }}>
                <div className="text-sm text-gray-600">FY2025 Scope 1</div>
                <div className="text-3xl font-bold" style={{ color: bhsColors.esgGreen }}>{ghgInventory2025.scope1.toFixed(2)} tCO₂e</div>
              </div>
              <div className="lg:col-span-2 p-4 bg-blue-50 rounded-lg text-sm text-blue-900">
                Scope 1 emissions primarily arise from diesel combustion in BHS-owned and operationally controlled logistics fleet, including prime movers, lorries and transport vehicles supporting logistics, transportation and project services. Other tracker sources are reported as zero.
              </div>
              <div className="bg-white rounded-xl p-5 shadow-lg border-l-4" style={{ borderLeftColor: bhsColors.accentOrange }}>
                <div className="text-sm text-gray-600">FY2025 Diesel consumption</div>
                <div className="text-3xl font-bold" style={{ color: bhsColors.accentOrange }}>{ghgInventory2025.dieselLitres.toLocaleString()} litres</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg">
              <BarChart
                title="Diesel Consumption Comparison"
                data={[
                  { label: '2023', value: dieselConsumption[2023], color: bhsColors.neutralGrey },
                  { label: '2024', value: dieselConsumption[2024], color: bhsColors.neutralGrey },
                  { label: '2025', value: dieselConsumption[2025], color: bhsColors.esgGreen }
                ]}
                height={300}
              />
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">
                    {totalReduction.toFixed(1)}% reduction (2023 → 2025)
                  </span>
                </div>
              </div> 
            </div>

            <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Optimization Strategies</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="p-3 md:p-4 border-l-4 border-green-500 bg-green-50">
                  <h4 className="font-semibold text-green-800 text-sm md:text-base">Idle Reduction</h4>
                  <p className="text-xs md:text-sm text-green-700 mt-1">Implementing idle time monitoring and driver training</p>
                </div>
                <div className="p-3 md:p-4 border-l-4 border-blue-500 bg-blue-50">
                  <h4 className="font-semibold text-blue-800 text-sm md:text-base">Telematics Monitoring</h4>
                  <p className="text-xs md:text-sm text-blue-700 mt-1">Real-time fleet tracking and performance analytics</p>
                </div>
                <div className="p-3 md:p-4 border-l-4 border-orange-500 bg-orange-50">
                  <h4 className="font-semibold text-orange-800 text-sm md:text-base">Maintenance Optimization</h4>
                  <p className="text-xs md:text-sm text-orange-700 mt-1">Preventive maintenance scheduling and optimization</p>
                </div>
                <div className="p-3 md:p-4 border-l-4 border-purple-500 bg-purple-50">
                  <h4 className="font-semibold text-purple-800 text-sm md:text-base">C-Guard Carbon Capture Research (Japan)</h4>
                  <p className="text-xs md:text-sm text-purple-700 mt-1">BHS is participating in a pilot study with Eplus (Japan) to test C-Guard, a carbon-absorbing material. Nine samples were deployed on vehicles and sent to Japan for laboratory analysis with Tokyo University of Technology</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg">
            <div className="flex flex-col gap-3 md:gap-4">
              <h3 className="text-lg md:text-xl font-semibold">Supporting Documentation</h3>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-4">
                <a
                  href={documents.reductionPlan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity text-xs md:text-sm"
                  style={{ backgroundColor: bhsColors.esgGreen }}
                >
                  <Download className="w-3 h-3 md:w-4 md:h-4" />
                  Download GHG Reduction Plan
                </a>
                <a
                  href={documents.fuelData}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity text-xs md:text-sm"
                  style={{ backgroundColor: bhsColors.accentOrange }}
                >
                  <Download className="w-3 h-3 md:w-4 md:h-4" />
                  Download Fuel Consumption Data
                </a>
                <a
                  href={documents.scope2Emission}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 md:px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity text-xs md:text-sm"
                  style={{ backgroundColor: bhsColors.primaryDark }}
                >
                  <Download className="w-3 h-3 md:w-4 md:h-4" />
                  Download Scope 2 Emission Data
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      title: 'Waste Management',
      content: (
        <div className="space-y-4 md:space-y-6">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4" style={{ color: bhsColors.primaryDark }}>
              Waste Management
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-sm text-gray-600">FY2025 Scope 3 Category 5</div>
              <div className="text-2xl font-bold text-green-700">110.69 tCO₂e</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-sm text-gray-600">Wooden waste recycled</div>
              <div className="text-xl font-bold">87.28 tCO₂e</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <div className="text-sm text-gray-600">Disposal and general rubbish</div>
              <div className="text-xl font-bold">23.41 tCO₂e</div>
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
            Activity quantities: 12,722.33 tonnes wooden waste and 361.696 tonnes general rubbish. The recycling/disposal proportions use an estimated historical proxy, not a complete FY2025 treatment-facility breakdown.
          </p>

          {/* Monthly Data Table with Chart Side-by-Side */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {/* Table */}
              <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-gray-200 rounded-lg">
                <table className="w-full border-collapse border border-gray-300 text-[10px] md:text-xs" style={{ tableLayout: 'auto' }}>
                  <thead className="sticky top-0 bg-gray-50 z-10">
                    <tr>
                      <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-left font-semibold w-auto">Month</th>
                      <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center font-semibold whitespace-nowrap w-[70px]">2023</th>
                      <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center font-semibold whitespace-nowrap w-[70px]">2024</th>
                      <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center font-semibold whitespace-nowrap w-[70px]">2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wasteMonthlyData3Y.map((row, idx) => (
                      <tr key={row.month} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 font-medium">{row.month}</td>
                        <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{row.y2023.toLocaleString()}</td>
                        <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{row.y2024.toLocaleString()}</td>
                        <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{row.y2025.toLocaleString()}</td>
                      </tr>
                    ))}
                    <tr className="bg-blue-50 font-bold sticky bottom-0">
                      <td className="border border-gray-300 px-1 md:px-1.5 py-0.5">Total</td>
                      <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{wasteTotals3Y[2023].toLocaleString()}</td>
                      <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{wasteTotals3Y[2024].toLocaleString()}</td>
                      <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{wasteTotals3Y[2025].toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Chart */}
              <div className="flex items-center justify-center w-full">
                <BarChart
                  title="Annual Waste Comparison (tonnes)"
                  data={[
                    { label: '2023', value: wasteTotals3Y[2023], color: bhsColors.neutralGrey },
                    { label: '2024', value: wasteTotals3Y[2024], color: bhsColors.accentOrange },
                    { label: '2025', value: wasteTotals3Y[2025], color: bhsColors.esgGreen }
                  ]}
                  height={400}
                />
              </div>
            </div>

            {/* Additional Info - Small horizontal cards at bottom */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg text-xs">
                <span className="font-medium">Wood Waste 2024:</span>
                <span className="font-bold">{wasteData.woodWaste2024.toLocaleString()} kg</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg text-xs">
                <span className="font-medium">Non-Wood Waste 2024:</span>
                <span className="font-bold">{wasteData.nonWoodWaste2024.toLocaleString()} kg</span>
              </div>
            </div>

            {/* Air Pollutants */}
            <div className="mt-4 bg-white rounded-xl p-3 md:p-4 shadow-lg">
              <h4 className="text-sm md:text-base font-semibold mb-2">Air Pollutants (2024)</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {Object.entries(airPollutants).map(([pollutant, value]) => (
                  <div key={pollutant} className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                    <span className="font-medium text-[10px] md:text-xs text-center mb-1">{pollutant}</span>
                    <span className="font-bold text-xs md:text-sm">{value} kg</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 p-2 bg-blue-50 rounded-lg">
                <p className="text-[10px] md:text-xs font-medium text-blue-800 text-center">
                  ℹ️ All air pollutants originate from mobile combustion
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

   {
  title: 'Energy Management',
  content: (
    <div className="space-y-4 md:space-y-6">

      <div className="text-center mb-4 md:mb-6">
        <h2
          className="text-2xl md:text-4xl font-bold mb-2 md:mb-4"
          style={{ color: bhsColors.primaryDark }}
        >
          Energy Management
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="text-sm text-gray-600">FY2025 Scope 2</div>
          <div className="text-xl font-bold text-blue-700">{ghgInventory2025.scope2Location.toFixed(2)} tCO₂e</div>
          <div className="text-xs text-gray-500 mt-1">Location-based</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="text-sm text-gray-600">Grid electricity purchased</div>
          <div className="text-xl font-bold">{ghgInventory2025.gridKwh.toLocaleString()} kWh</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="text-sm text-gray-600">Solar electricity generated</div>
          <div className="text-xl font-bold text-green-700">{ghgInventory2025.solarKwh.toLocaleString()} kWh</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="text-sm text-gray-600">Market-based emissions</div>
          <div className="text-xl font-bold">{ghgInventory2025.scope2Market.toFixed(2)} tCO₂e</div>
        </div>
      </div>
      <p className="text-xs md:text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
        Scope 2 emissions arise from purchased electricity consumed at BHS offices, warehouses and operational facilities supporting logistics, transportation, warehousing and project operations. Grid electricity and solar generation are shown separately and are not added together.
      </p>

      <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

          {/* ===================== COMBINED TABLE ===================== */}
          <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-gray-200 rounded-lg">
            <table className="w-full border-collapse border border-gray-300 text-[10px] md:text-xs">

              <thead className="sticky top-0 z-10">

                <tr className="bg-gray-100">
                  <th
                    rowSpan={2}
                    className="border border-gray-300 px-2 py-1 text-left font-semibold"
                  >
                    Month
                  </th>

                  <th
                    colSpan={3}
                    className="border border-gray-300 px-2 py-1 text-center font-semibold bg-blue-50"
                  >
                    Grid Electricity (kWh)
                  </th>

                  <th
                    colSpan={3}
                    className="border border-gray-300 px-2 py-1 text-center font-semibold bg-green-50"
                  >
                    Solar Energy (kWh)
                  </th>
                </tr>

                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-2 py-1 text-center">2023</th>
                  <th className="border border-gray-300 px-2 py-1 text-center">2024</th>
                  <th className="border border-gray-300 px-2 py-1 text-center">2025</th>

                  <th className="border border-gray-300 px-2 py-1 text-center">2023</th>
                  <th className="border border-gray-300 px-2 py-1 text-center">2024</th>
                  <th className="border border-gray-300 px-2 py-1 text-center">2025</th>
                </tr>
              </thead>

              <tbody>
                {months.map((month, index) => (
                  <tr
                    key={month}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="border border-gray-300 px-2 py-1 font-medium">
                      {month}
                    </td>

                    {/* Grid */}
                    <td className="border border-gray-300 px-2 py-1 text-center">
                      {energyValue(2023, index).toLocaleString()}
                    </td>
                    <td className="border border-gray-300 px-2 py-1 text-center">
                      {energyValue(2024, index).toLocaleString()}
                    </td>
                    <td className="border border-gray-300 px-2 py-1 text-center">
                      {energyValue(2025, index).toLocaleString()}
                    </td>

                    {/* Solar */}
                    <td className="border border-gray-300 px-2 py-1 text-center">
                      {solarValue(2023, index).toLocaleString()}
                    </td>
                    <td className="border border-gray-300 px-2 py-1 text-center">
                      {solarValue(2024, index).toLocaleString()}
                    </td>
                    <td className="border border-gray-300 px-2 py-1 text-center">
                      {solarValue(2025, index).toLocaleString()}
                    </td>
                  </tr>
                ))}

                {/* Totals */}
                <tr className="bg-blue-50 font-bold sticky bottom-0">
                  <td className="border border-gray-300 px-2 py-1">Total</td>

                  <td className="border border-gray-300 px-2 py-1 text-center">
                    {energyTotals3Y[2023].toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-center">
                    {energyTotals3Y[2024].toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-center">
                    {energyTotals3Y[2025].toLocaleString()}
                  </td>

                  <td className="border border-gray-300 px-2 py-1 text-center">
                    {solarTotals3Y[2023].toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-center">
                    {solarTotals3Y[2024].toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-2 py-1 text-center">
                    {solarTotals3Y[2025].toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ===================== COMBINED CHART ===================== */}
          <div className="flex items-center justify-center w-full">
           <BarChart
  title="Annual Grid vs Solar Energy Consumption (kWh)"
  grouped
  data={[
    {
      label: '2023',
      grid: energyTotals3Y[2023],
      solar: solarTotals3Y[2023]
    },
    {
      label: '2024',
      grid: energyTotals3Y[2024],
      solar: solarTotals3Y[2024]
    },
    {
      label: '2025',
      grid: energyTotals3Y[2025],
      solar: solarTotals3Y[2025]
    }
  ]}
  series={[
    { key: 'grid', label: 'Grid Electricity', color: bhsColors.primaryDark },
    { key: 'solar', label: 'Solar Energy', color: '#22c55e' }
  ]}
  height={400}
/>
          </div>

        </div>
      </div>

    </div>
  )
},

    {
      title: 'Water Management',
      content: (
        <div className="space-y-4 md:space-y-6">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4" style={{ color: bhsColors.primaryDark }}>
              Water Management
            </h2>
          </div>

          {/* Monthly Data Table with Chart Side-by-Side */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {/* Table */}
              <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-gray-200 rounded-lg">
                <table className="w-full border-collapse border border-gray-300 text-[10px] md:text-xs" style={{ tableLayout: 'auto' }}>
                  <thead className="sticky top-0 bg-blue-50 z-10">
                    <tr>
                      <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-left font-semibold w-auto">Month</th>
                      <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center font-semibold whitespace-nowrap w-[70px]">2023</th>
                      <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center font-semibold whitespace-nowrap w-[70px]">2024</th>
                      <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center font-semibold whitespace-nowrap w-[70px]">2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    {months.map((month, index) => (
                      <tr key={month} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 font-medium">{month}</td>
                        <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{waterValue(2023, index).toFixed(2)}</td>
                        <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{waterValue(2024, index).toFixed(2)}</td>
                        <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{waterValue(2025, index).toFixed(2)}</td>
                      </tr>
                    ))}
                    <tr className="bg-blue-50 font-bold sticky bottom-0">
                      <td className="border border-gray-300 px-1 md:px-1.5 py-0.5">Total</td>
                      <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{waterTotals3Y[2023].toFixed(2)}</td>
                      <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{waterTotals3Y[2024].toFixed(2)}</td>
                      <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{waterTotals3Y[2025].toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Chart */}
              <div className="flex items-center justify-center w-full">
                <BarChart
                  title="Annual Water Consumption (Cu M)"
                  data={[
                    { label: '2023', value: waterTotals3Y[2023], color: bhsColors.neutralGrey },
                    { label: '2024', value: waterTotals3Y[2024], color: bhsColors.accentOrange },
                    { label: '2025', value: waterTotals3Y[2025], color: bhsColors.esgGreen }
                  ]}
                  height={400}
                />
              </div>
            </div>

            {/* Water Conservation Note */}
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <TrendingDown className="w-4 h-4 text-blue-600 flex-shrink-0" />
               <span className="font-semibold text-blue-800 text-xs md:text-sm text-center">
  Significant water conservation: {(((waterTotals3Y[2025] - waterTotals3Y[2023]) / waterTotals3Y[2023]) * 100).toFixed(1)}% reduction from 2023 to 2025
  <br />
  <em className="text-gray-500 font-normal text-xs md:text-sm">
    *Disclaimer: In May 2024, BHS had renovation work, and employees were working from home.
  </em>
</span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      title: 'Reports & Documents',
      content: (
        <div className="space-y-6 md:space-y-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4" style={{ color: bhsColors.primaryDark }}>
              Environmental Reports & Documentation
            </h2>
            <p className="text-sm md:text-xl text-gray-600 px-4">
              Download comprehensive environmental reports and supporting documents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Waste & Air Quality Reports</h3>
              <div className="space-y-3 md:space-y-4">
                <a
                  href={documents.wasteReport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-medium text-sm md:text-base">Waste Management Report</div>
                    <div className="text-xs md:text-sm text-gray-600">Comprehensive waste analysis</div>
                  </div>
                </a>
                <a
                  href={documents.airPollutant}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5 text-orange-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-medium text-sm md:text-base">Air Pollutant Report</div>
                    <div className="text-xs md:text-sm text-gray-600">Air quality monitoring data</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 md:p-8 shadow-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Energy & Fleet Reports</h3>
              <div className="space-y-3 md:space-y-4">
                <a
                  href={documents.reductionPlan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-medium text-sm md:text-base">GHG Reduction Plan</div>
                    <div className="text-xs md:text-sm text-gray-600">Emission reduction strategy</div>
                  </div>
                </a>
                <a
                  href={documents.fuelData}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5 text-orange-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-medium text-sm md:text-base">Fuel Consumption Data</div>
                    <div className="text-xs md:text-sm text-gray-600">Fleet performance metrics</div>
                  </div>
                </a>
                <a
                  href={documents.scope2Emission}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-medium text-sm md:text-base">Scope 2 Emission Data</div>
                    <div className="text-xs md:text-sm text-gray-600">Energy-related emissions</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="min-h-screen print:page-break-after-always relative overflow-hidden">
      {/* Background Icons - Minimal */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-20 left-20">
          <Leaf className="w-32 h-32 text-green-500" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Wind className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute top-1/2 left-1/3">
          <Droplets className="w-24 h-24 text-cyan-500" />
        </div>
        <div className="absolute bottom-1/3 right-1/4">
          <Target className="w-24 h-24 text-orange-500" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 relative z-10">
        {/* Page Navigation */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="flex flex-wrap justify-center gap-1 md:gap-2 bg-white rounded-lg p-1 md:p-2 shadow-lg max-w-6xl w-full">
            {pages.map((page, index) => (
              <button
                key={index}
                onClick={() => setActivePage(index)}
                className={`px-2 md:px-3 py-1.5 md:py-2 rounded-lg text-[10px] md:text-xs font-medium transition-all duration-200 ${
                  activePage === index
                    ? 'text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: activePage === index ? bhsColors.esgGreen : 'transparent'
                }}
              >
                {page.title}
              </button>
            ))}
          </div>
        </div>

        {/* Page Content */}
        <div className="animate-fadeIn">
          {pages[activePage].content}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;