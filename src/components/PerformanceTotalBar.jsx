// src/components/PerformanceTotalBar.jsx

export default function PerformanceTotalBar({ value, max = 100 }) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-semibold text-text-dark">Total</span>
        <span className="text-[14px] font-semibold text-[#262A33]">
          {value}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-light rounded-full">
        <div
          className="h-2 rounded-full bg-brand-orange"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
