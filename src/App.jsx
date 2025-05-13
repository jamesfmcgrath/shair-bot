// src/App.jsx
import React from 'react';
import DashboardCard from './components/DashboardCard';
import SurveyList from './components/SurveyList';
import { dashboardCards } from './data/mockDashboardData';
import { surveys } from './data/mockSurveyData';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md h-16 flex items-center px-6 justify-between">
        <h1 className="text-xl font-bold">Shair-Bot</h1>
        <div className="text-sm text-gray-500">Welcome</div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 border-r p-4 hidden md:block">
          <nav>
            <ul className="space-y-2">
              <li className="font-semibold text-gray-700">Dashboard</li>
              <li className="text-gray-600">Surveys</li>
              <li className="text-gray-600">Insights</li>
              <li className="text-gray-600">Settings</li>
            </ul>
          </nav>
        </aside>

        {/* Main View */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholder for dashboard cards */}
            {dashboardCards.map((card) => (
              <DashboardCard
                key={card.id}
                title={card.title}
                value={card.value}
                description={card.description}
              />
            ))}
            <div className="mt-8">
              <SurveyList surveys={surveys} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
