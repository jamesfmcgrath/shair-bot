// src/App.jsx
import Header from './components/Header';
import WelcomeBlock from './components/WelcomeBlock';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-light text-text-dark">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6 p-6 xl:grid-cols-2">
        <WelcomeBlock />

        <section
          className="p-6 space-y-4 bg-white rounded-lg shadow"
          id="opportunities-block"
        >
          <h2 className="text-xl font-bold">Shair.bot Opportunities</h2>
          <p className="text-sm text-text-muted">
            Discover new research opportunities tailored to your expertise. Join
            to earn rewards and expand your knowledge base.
          </p>
          <div className="flex items-center justify-center h-40 rounded-lg bg-background-blue">
            <span className="font-semibold text-brand-navy">
              [Opportunity Cards Grid]
            </span>
          </div>
          <button className="w-full px-4 py-2 mt-4 font-medium text-white transition rounded bg-brand-blue hover:bg-hover-blue">
            View All
          </button>
        </section>

        {/* Second Row: Shairs 75% / Targeted Research 25% */}
        <div className="col-span-2 gap-6 xl:grid xl:grid-cols-4">
          <section
            className="p-6 space-y-4 bg-white rounded-lg shadow xl:col-span-3"
            id="shairs-block"
          >
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <button className="px-4 py-1 text-sm text-white rounded-full bg-brand-blue">
                  Completed Shairs
                </button>
                <button className="px-4 py-1 text-sm rounded-full bg-gray-light text-text-dark">
                  Research Projects
                </button>
              </div>
              <input
                type="text"
                placeholder="Search Shairs..."
                className="w-1/3 px-3 py-1 text-sm border rounded border-border-gray"
              />
            </div>
            <div className="flex gap-4 mt-4">
              {/* Left Sidebar */}
              <aside className="w-1/3 space-y-2">
                <div className="p-3 rounded cursor-pointer bg-background-blue hover:bg-brand-blue hover:text-white">
                  Shair #1
                </div>
                <div className="p-3 rounded cursor-pointer bg-background-blue hover:bg-brand-blue hover:text-white">
                  Shair #2
                </div>
                <div className="p-3 rounded cursor-pointer bg-background-blue hover:bg-brand-blue hover:text-white">
                  Shair #3
                </div>
              </aside>
              {/* Main Content */}
              <div className="w-2/3 space-y-3">
                <h3 className="text-lg font-bold">
                  Shair #1: AI Research Insights
                </h3>
                <span className="px-2 py-1 text-xs text-black rounded bg-brand-yellow">
                  Category: Technology
                </span>
                <p className="text-sm">
                  In this research, you explored emerging uses of AI in
                  healthcare. Below is your knowledge performance:
                </p>
                <div className="flex items-center justify-center h-24 rounded bg-background-blue">
                  [Chart Placeholder]
                </div>
                <p className="text-sm font-medium text-text-muted">
                  Compared to your peers, you scored 12% higher in accuracy and
                  18% higher in engagement.
                </p>
              </div>
            </div>
          </section>

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
