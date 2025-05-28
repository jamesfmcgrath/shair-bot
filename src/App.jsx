// src/App.jsx
import CompletedShairs from './components/CompletedShairs';
import Header from './components/Header';
import OpportunitiesBlock from './components/OpportunitiesBlock';
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

          <section
            className="p-6 bg-white rounded-lg shadow xl:col-span-1"
            id="targeted-research-block"
          >
            <h2 className="text-xl font-bold">Targeted Research</h2>
            <p className="text-sm text-text-muted">
              Research tailored to your profile and interests. Join a session to
              earn rewards and contribute valuable insights.
            </p>
            <div className="flex items-center justify-center h-40 rounded-lg bg-background-green">
              <span className="font-semibold text-success-green">
                [Vertical Bar Chart]
              </span>
            </div>
            <button className="w-full px-4 py-2 mt-4 font-medium text-white transition rounded bg-success-green hover:bg-emerald-600">
              Learn More
            </button>
          </section>
        </div>
      </div>

      {/* Floating Button */}
      <button className="fixed px-5 py-3 font-semibold text-white rounded-full shadow-lg bottom-6 right-6 bg-brand-orange hover:bg-brand-yellow">
        ✳ Shair.bot
      </button>
    </div>
  );
}
