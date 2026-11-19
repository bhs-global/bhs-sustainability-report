import React, { useState } from 'react';
import {
  bhsColors,
  workforceData,
  workforceGender3Y,
  workforceIdentification3Y,
  workforceEmploymentType3Y,
  workforceAgeGroup3Y,
  trainingData,
  pmetData,
  ethicsTrainingRoadmap,
  documents,
  nationalityPercentage
} from '../../data/bhsData';
import BarChart from '../charts/BarChart';
import DonutChart from '../charts/DonutChart';
import { Download, Users, TrendingUp, Award, Heart, GraduationCap } from 'lucide-react';

const SocialSection: React.FC = () => {
  const [activePage, setActivePage] = useState(0);

  // Split content into more manageable sub-sections
  // 🔹 Alias to keep existing JSX unchanged (workforceDataExtended used throughout)
  const workforceDataExtended = {
    gender: workforceGender3Y,
    identification: workforceIdentification3Y,
    employment: workforceEmploymentType3Y,
    ageGroup: workforceAgeGroup3Y
  };

  const pages = [
    {
      title: 'Workforce Overview',
      content: (
        <div className="space-y-6 print:space-y-4">
          
          <div className="text-center mb-8 print:mb-6">
            <h2 className="text-4xl font-bold mb-4 print:text-3xl" style={{ color: bhsColors.primaryDark }}>
              Workforce Overview
            </h2>
            <p className="text-xl text-gray-600 print:text-lg">
              Building an inclusive and diverse workforce
            </p>
          </div>

          {/* KPI CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 print:gap-4">
            <div className="bg-white rounded-xl p-6 shadow-lg print:p-4">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 print:w-6 print:h-6" style={{ color: bhsColors.esgGreen }} />
                <h3 className="text-xl font-semibold print:text-lg">Total Employees</h3>
              </div>
              <div className="text-4xl font-bold mb-2 print:text-3xl" style={{ color: bhsColors.esgGreen }}>
                {workforceData.totalEmployees}
              </div>
              <p className="text-gray-600 print:text-sm">2025</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg print:p-4">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 print:w-6 print:h-6" style={{ color: bhsColors.accentOrange }} />
                <h3 className="text-xl font-semibold print:text-lg">Female Representation</h3>
              </div>
              <div className="text-4xl font-bold mb-2 print:text-3xl" style={{ color: bhsColors.accentOrange }}>
                {workforceData.femalePercentage}%
              </div>
              <p className="text-gray-600 print:text-sm">Up from 9% in 2023</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg print:p-4">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 print:w-6 print:h-6" style={{ color: bhsColors.primaryDark }} />
                <h3 className="text-xl font-semibold print:text-lg">Local Workforce</h3>
              </div>
              <div className="text-4xl font-bold mb-2 print:text-3xl" style={{ color: bhsColors.primaryDark }}>
                {workforceData.localWorkforce}%
              </div>
              <p className="text-gray-600 print:text-sm">Local hiring initiative</p>
            </div>
          </div>

          {/* GENDER DISTRIBUTION */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              
              <div className="overflow-x-auto border border-gray-200 rounded-lg w-full max-w-2xl">
                <table className="w-full border-collapse border border-gray-300 text-[10px] md:text-xs">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border px-1.5 py-1 text-left font-semibold">Gender</th>
                      <th className="border px-1.5 py-1 text-center font-semibold">2023</th>
                      <th className="border px-1.5 py-1 text-center font-semibold">2024</th>
                      <th className="border px-1.5 py-1 text-center font-semibold">2025</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-1.5 py-1 font-medium">Female</td>
                      <td className="border px-1.5 py-1 text-center">{workforceDataExtended.gender[2023].female}</td>
                      <td className="border px-1.5 py-1 text-center">{workforceDataExtended.gender[2024].female}</td>
                      <td className="border px-1.5 py-1 text-center">{workforceDataExtended.gender[2025].female}</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border px-1.5 py-1 font-medium">Male</td>
                      <td className="border px-1.5 py-1 text-center">{workforceDataExtended.gender[2023].male}</td>
                      <td className="border px-1.5 py-1 text-center">{workforceDataExtended.gender[2024].male}</td>
                      <td className="border px-1.5 py-1 text-center">{workforceDataExtended.gender[2025].male}</td>
                    </tr>
                    <tr className="bg-blue-50 font-bold">
                      <td className="border px-1.5 py-1">Total</td>
                      <td className="border px-1.5 py-1 text-center">{workforceDataExtended.gender[2023].total}</td>
                      <td className="border px-1.5 py-1 text-center">{workforceDataExtended.gender[2024].total}</td>
                      <td className="border px-1.5 py-1 text-center">{workforceDataExtended.gender[2025].total}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>

        </div>
      )
    },
   
  {
  title: 'Nationality',
  content: (
    <div className="space-y-6 print:space-y-4">
      <div className="text-center mb-6">
        <h2
          className="text-2xl md:text-4xl font-bold mb-4"
          style={{ color: bhsColors.primaryDark }}
        >
          Workforce by Nationality
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* TABLE */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="border px-3 py-2 text-left font-semibold">
                  Nationality
                </th>
                <th className="border px-3 py-2 text-center font-semibold">
                  Percentage (%)
                </th>
              </tr>
            </thead>
            <tbody>
              {nationalityPercentage.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="border px-3 py-2">{item.name}</td>
                  <td className="border px-3 py-2 text-center font-medium">
                    {item.value}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* DONUT CHART */}
        <div className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center">

          <DonutChart
            title="Nationality Distribution"
            data={nationalityPercentage.map((item, index) => ({
              label: item.name,
              value: item.value,
              color: [
                bhsColors.esgGreen,
                bhsColors.primaryDark,
                bhsColors.accentOrange,
                '#4ECDC4',
                '#96CEB4',
                '#FFEAA7'
              ][index % 6]
            }))}
          />

          {/* Legend */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <span className="font-semibold text-gray-700 text-sm">
              Legend:
            </span>

            {nationalityPercentage.map((item, index) => {
              const colors = [
                bhsColors.esgGreen,
                bhsColors.primaryDark,
                bhsColors.accentOrange,
                '#4ECDC4',
                '#96CEB4',
                '#FFEAA7'
              ];

              return (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: colors[index % 6] }}
                  ></div>
                  <span className="text-sm">{item.name}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  )
},
    {
      title: 'Employment Types',
      content: (
        <div className="space-y-6 print:space-y-4">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4" style={{ color: bhsColors.primaryDark }}>
              Employment Type Distribution
            </h2>
          </div>

          {/* C. Employment Type */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">

            <div className="overflow-x-auto border border-gray-200 rounded-lg max-w-2xl mx-auto">
              <table className="w-full border-collapse border border-gray-300 text-[10px] md:text-xs" style={{ tableLayout: 'auto' }}>
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-left font-semibold w-auto">Type</th>
                    <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center font-semibold whitespace-nowrap w-[60px]">2023</th>
                    <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center font-semibold whitespace-nowrap w-[60px]">2024</th>
                    <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center font-semibold whitespace-nowrap w-[60px]">2025</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 font-medium">Permanent</td>
                    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{workforceDataExtended.employment[2023].permanent}</td>
                    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{workforceDataExtended.employment[2024].permanent}</td>
                    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{workforceDataExtended.employment[2025].permanent}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 font-medium">Contract</td>
                    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{workforceDataExtended.employment[2023].contract}</td>
                    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{workforceDataExtended.employment[2024].contract}</td>
                    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{workforceDataExtended.employment[2025].contract}</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5">Total</td>
                    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{workforceDataExtended.employment[2023].total}</td>
                    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{workforceDataExtended.employment[2024].total}</td>
                    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">{workforceDataExtended.employment[2025].total}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Trend Analysis:</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Permanent: 99% → 99% → 98%</li>
                <li>• Contract: 1% → 1% → 2%</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Age Demographics',
      content: (
        <div className="space-y-6 print:space-y-4">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4" style={{ color: bhsColors.primaryDark }}>
              Age Demographics
            </h2>
          </div>

          {/* D. Age Group */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4">
              {/* Table */}
              <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-gray-200 rounded-lg">
                <table className="w-full border-collapse border border-gray-300 text-[10px] md:text-xs" style={{ tableLayout: 'auto' }}>
                  <thead className="sticky top-0 bg-gray-50 z-10">
                    <tr>
                      <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-left font-semibold w-auto">Age Group</th>
                      <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center font-semibold whitespace-nowrap w-[60px]">2023</th>
                      <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center font-semibold whitespace-nowrap w-[60px]">2024</th>
                      <th className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center font-semibold whitespace-nowrap w-[60px]">2025</th>
                    </tr>
                  </thead>
               <tbody>
  {Object.keys(workforceDataExtended.ageGroup[2023])
    .filter(key => key !== 'total')
    .map((ageGroup, index) => {
      const ageGroupKey =
        ageGroup as keyof typeof workforceDataExtended.ageGroup[2023];

      return (
        <tr
          key={ageGroup}
          className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
        >
          <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 font-medium">
            {ageGroup}
          </td>
          <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">
            {workforceDataExtended.ageGroup[2023][ageGroupKey]}
          </td>
          <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">
            {workforceDataExtended.ageGroup[2024][ageGroupKey]}
          </td>
          <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">
            {workforceDataExtended.ageGroup[2025][ageGroupKey]}
          </td>
        </tr>
      );
    })}

  {/* TOTAL ROW */}
  <tr className="bg-blue-50 font-bold">
    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5">
      Total
    </td>
    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">
      {workforceDataExtended.ageGroup[2023].total}
    </td>
    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">
      {workforceDataExtended.ageGroup[2024].total}
    </td>
    <td className="border border-gray-300 px-1 md:px-1.5 py-0.5 text-center">
      {workforceDataExtended.ageGroup[2025].total}
    </td>
  </tr>
</tbody>
                </table>
              </div>

              {/* Chart */}
              <div className="flex items-center justify-center w-full">
                <BarChart
                  title="Age Group 31-40 Distribution (Employees)"
                  data={[
                    { label: '2023', value: workforceDataExtended.ageGroup[2023]['31-40'], color: bhsColors.primaryDark },
                    { label: '2024', value: workforceDataExtended.ageGroup[2024]['31-40'], color: bhsColors.primaryDark },
                    { label: '2025', value: workforceDataExtended.ageGroup[2025]['31-40'], color: bhsColors.primaryDark }
                  ]}
                  height={400}
                />
              </div>
            </div>

            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Trend Summary:</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Largest workforce group: 31–40</li>
                <li>• Moderate growth in 41–50</li>
                <li>• Slight increase in 61–70</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    
    {
      title: 'Safety Performance',
      content: (
        <div className="space-y-6 print:space-y-4">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4" style={{ color: bhsColors.primaryDark }}>
              Safety Performance
            </h2>
          </div>

          {/* Safety Performance */}
          <div className="bg-white rounded-xl p-6 shadow-lg print:p-4 print:page-break-inside-avoid">
            <BarChart
              title="Safety Incidents (Count)"
              data={[
                { label: '2023', value: workforceData.incidents2023, color: bhsColors.neutralGrey },
                { label: '2024', value: workforceData.incidents2024, color: bhsColors.esgGreen },
                { label: '2025', value: workforceData.incidents2025, color: bhsColors.esgGreen }
              ]}
              height={300}
            />
            <div className="mt-4 p-4 bg-green-50 rounded-lg print:mt-3 print:p-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600 transform rotate-180 print:w-4 print:h-4" />
                <span className="font-semibold text-green-800 print:text-sm">
                 {(((workforceData.incidents2025 - workforceData.incidents2023) / workforceData.incidents2023) * 100).toFixed(1)}% reduction in incidents (2023-2025)
                </span>
              </div>
            </div>
          </div>
        </div>
      )
    },
  {
  title: 'Living Wage',
  content: (
    <div className="space-y-8">
      
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4" style={{ color: bhsColors.primaryDark }}>
          Living Wage Commitment
        </h2>
      </div>

      {/* Tripartite Alignment Statement */}
    <p className="text-sm text-gray-600 leading-relaxed">
  Our living wage benchmark methodology aligns with Singapore’s Tripartite Framework 
  and National Wages Council recommendations, supporting fair and sustainable wage practices.
</p>

      {/* 1️⃣ Living Wage Breakdown */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">
          Estimated Monthly Living Wage (Singapore)
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="border px-3 py-2 text-left font-semibold">Category</th>
                <th className="border px-3 py-2 text-center font-semibold">SGD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">Housing (shared rental / dormitory)</td>
                <td className="border px-3 py-2 text-center">600</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-3 py-2">Food</td>
                <td className="border px-3 py-2 text-center">400</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Transport</td>
                <td className="border px-3 py-2 text-center">130</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-3 py-2">Utilities</td>
                <td className="border px-3 py-2 text-center">170</td>
              </tr>
              <tr>
                <td className="border px-3 py-2">Miscellaneous</td>
                <td className="border px-3 py-2 text-center">300</td>
              </tr>
              <tr className="bg-blue-50 font-bold">
                <td className="border px-3 py-2">Total Estimated Living Wage</td>
                <td className="border px-3 py-2 text-center">1,600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2️⃣ Workforce Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <div className="text-sm text-gray-500 mb-2">Total Employees</div>
          <div className="text-3xl font-bold" style={{ color: bhsColors.primaryDark }}>
            406
          </div>
          <div className="text-sm text-gray-600">As of 2025</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <div className="text-sm text-gray-500 mb-2">Employees Below SGD 1,600</div>
          <div className="text-3xl font-bold text-red-600">
            12
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg text-center">
          <div className="text-sm text-gray-500 mb-2">% Below Living Wage</div>
          <div className="text-3xl font-bold text-red-600">
            3.2%
          </div>
        </div>

      </div>

      {/* 3️⃣ Corrective + Target Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Corrective Measures */}
        <div 
          className="bg-green-50 border-l-4 p-4 rounded-lg"
          style={{ borderLeftColor: bhsColors.esgGreen }}
        >
          <h3 className="text-base font-semibold mb-2 text-green-800">
            Corrective Measures
          </h3>
          <p className="text-sm text-green-700">
            Annual salary reviews, structured incentives and targeted wage 
            adjustments are implemented to progressively close identified gaps.
          </p>
        </div>

        {/* Target Commitment */}
        <div 
          className="bg-blue-50 border-l-4 p-4 rounded-lg"
          style={{ borderLeftColor: bhsColors.primaryDark }}
        >
          <h3 className="text-base font-semibold mb-2 text-blue-800">
            Target Commitment
          </h3>
          <p className="text-sm text-blue-700 font-medium">
            🎯 100% of employees to earn above the living wage benchmark by 2028.
          </p>
        </div>

      </div>

    </div>
  )
},
    {
      title: 'Training & Development',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: bhsColors.primaryDark }}>
              Training & Development Programs
            </h2>
            <p className="text-xl text-gray-600">
              Employee development initiatives and skills enhancement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Training & Development</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Anti-Bribery Trained</span>
                  <span className="text-xl font-bold" style={{ color: bhsColors.esgGreen }}>
                    {trainingData.antiBriberyTrained}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Promotions 2024</span>
                  <span className="text-xl font-bold" style={{ color: bhsColors.accentOrange }}>
                    {trainingData.promotions}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">Total Training Hours</span>
                  <span className="text-xl font-bold" style={{ color: bhsColors.primaryDark }}>
                    {trainingData.trainingHours}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Ethics Training Roadmap</h3>
              <div className="space-y-4">
                {Object.entries(ethicsTrainingRoadmap).map(([year, percentage]) => (
                  <div key={year} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{year}</span>
                      <span className="font-bold">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full transition-all duration-500"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: bhsColors.esgGreen
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-800">
                  🎯 Target: 100% ethics training coverage by 2027
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Reports & Documents',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: bhsColors.primaryDark }}>
              Social Reports & Documentation
            </h2>
            <p className="text-xl text-gray-600">
              Download comprehensive social and workforce reports
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Available Reports</h3>
            <div className="space-y-4">
              <a
                href={documents.livingWage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Download className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium">Living Wage Report</div>
                  <div className="text-sm text-gray-600">Comprehensive wage and benefits analysis</div>
                </div>
              </a>
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
        <div className="absolute top-20 right-20">
          <Users className="w-32 h-32 text-blue-500" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Heart className="w-32 h-32 text-pink-500" />
        </div>
        <div className="absolute top-1/2 left-1/3">
          <GraduationCap className="w-24 h-24 text-purple-500" />
        </div>
        <div className="absolute bottom-1/3 right-1/4">
          <Award className="w-24 h-24 text-orange-500" />
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

export default SocialSection;
