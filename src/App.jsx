// src/App.jsx
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/500.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/700.css';
import '@fontsource/nunito-sans/800.css';
import { useState } from 'react';
import ChatPanel from './components/ChatPanel';
import ChatToggleButton from './components/ChatToggleButton';
import CompletedShairs from './components/CompletedShairs';
import Header from './components/Header';
import OpportunitiesBlock from './components/OpportunitiesBlock';
import TargetedResearch from './components/TargetedResearch';
import WelcomeBlock from './components/WelcomeBlock';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-light text-text-dark">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div className="flex flex-col gap-6 p-6 xl:grid xl:grid-cols-2">
        <WelcomeBlock />
        <OpportunitiesBlock />

        {/* Second Row: Shairs 75% / Targeted Research 25% */}
        <div className="col-span-2 gap-6 xl:grid xl:grid-cols-4">
          <CompletedShairs />
          <TargetedResearch />
        </div>
      </div>

      {/* Floating Button */}
      <ChatToggleButton
        isOpen={isChatOpen}
        onClick={() => setIsChatOpen(!isChatOpen)}
      />

      {/* Chat Panel */}
      {isChatOpen && (
        <>
          {/* Optional: Background overlay */}
          <div
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsChatOpen(false)}
          ></div>

          <ChatPanel onClose={() => setIsChatOpen(false)} />
        </>
      )}
    </div>
  );
}
