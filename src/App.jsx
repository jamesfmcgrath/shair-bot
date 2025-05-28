// src/App.jsx
import { FaUserCircle } from 'react-icons/fa';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-light text-text-dark">
      {/* Header */}
      <header className="flex items-center justify-between h-16 px-6 text-white shadow bg-brand-navy">
        <h1 className="text-xl font-bold tracking-tight">Shair.bot</h1>
        <div className="flex items-center space-x-2 text-sm font-medium">
          <span>Taylor Morgan</span>
          <FaUserCircle className="w-5 h-5" />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6 p-6 xl:grid-cols-2">
        {/* Top Row: Welcome + Targeted Research */}
        <section className="p-6 bg-white rounded-lg shadow" id="welcome-block">
          <p className="text-lg font-semibold">[Welcome Block Placeholder]</p>
        </section>

        <section
          className="p-6 bg-white rounded-lg shadow"
          id="targeted-research-block"
        >
          <p className="text-lg font-semibold">
            [Targeted Research Block Placeholder]
          </p>
        </section>

        {/* Second Row: Shairs 75% / Opportunities 25% */}
        <div className="col-span-2 gap-6 xl:grid xl:grid-cols-4">
          <section
            className="p-6 bg-white rounded-lg shadow xl:col-span-3"
            id="shairs-block"
          >
            <p className="text-lg font-semibold">[Shairs Block Placeholder]</p>
          </section>

          <section
            className="p-6 bg-white rounded-lg shadow xl:col-span-1"
            id="opportunities-block"
          >
            <p className="text-lg font-semibold">
              [Opportunities Block Placeholder]
            </p>
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
