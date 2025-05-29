// src/App.jsx
import CompletedShairs from './components/CompletedShairs';
import Header from './components/Header';
import OpportunitiesBlock from './components/OpportunitiesBlock';
import TargetedResearch from './components/TargetedResearch';
import WelcomeBlock from './components/WelcomeBlock';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-light text-text-dark">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6 p-6 xl:grid-cols-2">
        <WelcomeBlock />
        <OpportunitiesBlock />

        {/* Second Row: Shairs 75% / Targeted Research 25% */}
        <div className="col-span-2 gap-6 xl:grid xl:grid-cols-4">
          <CompletedShairs />

          <TargetedResearch />
        </div>
      </div>

      {/* Floating Button */}
      <button className="fixed px-5 py-3 font-semibold text-white rounded-full shadow-lg bottom-6 right-6 bg-brand-orange hover:bg-brand-yellow">
        ✳ Shair.bot
      </button>
    </div>
  );
}
