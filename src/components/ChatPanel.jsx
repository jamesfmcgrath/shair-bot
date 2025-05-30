export default function ChatPanel({ onClose }) {
  return (
    <div className="fixed bottom-[100px] right-6 w-[380px] h-[75vh] bg-white rounded-lg shadow-lg flex flex-col z-40 overflow-hidden">
      {/* Header */}
      <div className="bg-brand-orange text-white px-4 py-3 text-[16px] font-bold">
        Shair.bot
      </div>

      {/* Chat content */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#F9FBFD]">
        {/* Messages go here */}
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
