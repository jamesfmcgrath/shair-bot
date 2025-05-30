// src/components/ChatPanel.jsx

import { useEffect, useState } from 'react';

export default function ChatPanel({ onClose }) {
  const [chatStep, setChatStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Example flow of messages
  const flow = [
    <BotMessage text="You're eligible to participate!" />,
    <SurveyCard />,
    <BotMessage text="Thanks for your time. You're all set to begin the shair." />,
    <StartButton />,
    <QuestionMessage text="Survey Title: Question 1" />,
    <BotMessage text="Response 1: Cras malesuada dictum..." />,
    <UserMessage text="User input text..." />,
  ];

  // Auto-progress chat with typing animation
  useEffect(() => {
    if (chatStep < flow.length - 1) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setChatStep((prev) => prev + 1);
      }, 2000); // 2 second delay

      return () => clearTimeout(timer);
    }
  }, [chatStep]);

  return (
    <div className="fixed bottom-[100px] right-6 w-[380px] h-[75vh] bg-white rounded-lg shadow-lg flex flex-col z-40 overflow-hidden">
      {/* Header */}
      <div className="bg-brand-orange text-white px-4 py-3 text-[16px] font-bold">
        Shair.bot
      </div>

      {/* Chat content */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#F9FBFD]">
        {flow.slice(0, chatStep + 1).map((message, index) => (
          <div key={index}>{message}</div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-1 text-sm italic text-gray-500">
            <span className="animate-pulse">Typing...</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 p-2 border-t">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-3 py-2 rounded-full border text-[14px]"
        />
        <button className="text-xl text-brand-blue">➤</button>
      </div>
    </div>
  );
}

// Subcomponents

function BotMessage({ text }) {
  return (
    <div className="p-3 text-sm bg-gray-100 rounded-md text-text-dark">
      {text}
    </div>
  );
}

function UserMessage({ text }) {
  return (
    <div className="self-end p-3 text-sm bg-blue-200 rounded-md text-text-dark">
      {text}
    </div>
  );
}

function SurveyCard() {
  return (
    <div className="p-3 text-sm rounded-md bg-background-blue text-text-dark">
      <div className="mb-1 font-bold">Shair Title</div>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
      <div className="mt-2 text-xs">Up to 80 Knowledge Points &nbsp; $00</div>
    </div>
  );
}

function StartButton() {
  return (
    <button className="px-3 py-1 text-sm text-white rounded-md bg-brand-orange">
      Start shair
    </button>
  );
}

function QuestionMessage({ text }) {
  return (
    <div className="p-3 text-sm bg-gray-100 rounded-md text-text-dark">
      {text}
    </div>
  );
}
