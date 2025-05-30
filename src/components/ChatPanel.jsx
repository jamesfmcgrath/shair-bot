// src/components/ChatPanel.jsx

import { useEffect, useRef, useState } from 'react';

export default function ChatPanel() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "You're eligible to participate!" },
    {
      role: 'assistant',
      content: "Thanks for your time. You're all set to begin the shair.",
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [shairStarted, setShairStarted] = useState(false);
  const messagesEndRef = useRef(null);

  async function handleSendMessage(userMessage) {
    if (!userMessage) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o',
            messages: [
              {
                role: 'system',
                content:
                  'You are Shair.bot, a friendly and professional research assistant that guides users through the shair process. Keep responses clear and on brand.',
              },
              ...messages,
              { role: 'user', content: userMessage },
            ],
            max_tokens: 200,
            temperature: 0.7,
          }),
        }
      );

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content?.trim();

      if (reply) {
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      }
    } catch (error) {
      console.error('ChatGPT API error:', error);
    } finally {
      setIsTyping(false);
    }
  }

  function handleUserSend() {
    handleSendMessage(inputValue.trim());
  }

  function handleStartShair() {
    setShairStarted(true);
    handleSendMessage('Begin the shair process.');
  }

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  function handleResetChat() {
    setMessages([
      { role: 'assistant', content: "You're eligible to participate!" },
      {
        role: 'assistant',
        content: "Thanks for your time. You're all set to begin the shair.",
      },
    ]);
    setShairStarted(false);
  }

  return (
    <div className="fixed bottom-[100px] right-6 w-[380px] h-[75vh] bg-white rounded-lg shadow-lg flex flex-col z-40 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-brand-orange text-white px-4 py-3 text-[16px] font-bold">
        <span>Shair.bot</span>
        <button
          onClick={handleResetChat}
          className="text-sm font-medium underline"
        >
          Reset
        </button>
      </div>

      {/* Chat content */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#F9FBFD]">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-md text-sm max-w-[80%] ${
              msg.role === 'user'
                ? 'bg-blue-200 self-end text-text-dark ml-auto'
                : 'bg-gray-100 text-text-dark'
            }`}
          >
            {msg.content}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-1 text-sm italic text-gray-500">
            <span className="animate-bounce">•</span>
            <span className="delay-100 animate-bounce">•</span>
            <span className="delay-200 animate-bounce">•</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Start Shair button (before chat starts) */}
      {!shairStarted && (
        <div className="p-3 border-t">
          <button
            onClick={handleStartShair}
            className="w-full px-4 py-2 text-sm font-bold text-white transition rounded bg-brand-orange hover:bg-brand-yellow"
            disabled={isTyping}
          >
            Start Shair
          </button>
        </div>
      )}

      {/* Input (after shair started) */}
      {shairStarted && (
        <div className="flex items-center gap-2 p-2 border-t">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 rounded-full border text-[14px]"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleUserSend();
            }}
            disabled={isTyping}
          />
          <button
            onClick={handleUserSend}
            className="text-xl text-brand-blue"
            disabled={isTyping}
          >
            ➤
          </button>
        </div>
      )}
    </div>
  );
}
