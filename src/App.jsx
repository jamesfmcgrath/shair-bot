// src/App.jsx
import DashboardCard from './components/DashboardCard';
import InsightsChart from './components/InsightsChart';
import SurveyList from './components/SurveyList';
import { dashboardCards } from './data/mockDashboardData';
import { insights } from './data/mockInsightsData';
import { surveys } from './data/mockSurveyData';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      {/* Header */}
      <header className="flex items-center justify-between h-16 px-6 text-white shadow-md bg-primary">
        <h1 className="text-xl font-bold">Shair-Bot</h1>
        <div className="text-sm text-white/70">Welcome</div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden w-64 p-4 border-r bg-background border-border md:block">
          <nav>
            <ul className="space-y-2">
              <li className="font-semibold text-text">Dashboard</li>
              <li className="transition text-muted hover:text-text">Surveys</li>
              <li className="transition text-muted hover:text-text">
                Insights
              </li>
              <li className="transition text-muted hover:text-text">
                Settings
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main View */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            <div className="mt-8">
              <InsightsChart data={insights} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
