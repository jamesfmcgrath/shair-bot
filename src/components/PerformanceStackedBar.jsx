// src/components/PerformanceStackedBar.jsx

export default function PerformanceStackedBar({ label, scores }) {
  const colors = {
    vocabulary: 'bg-brand-blue',
    speed: 'bg-success-green',
    insights: 'bg-brand-orange',
  };

  const total = Object.values(scores).reduce((sum, val) => sum + val, 0);

  return (
    <div className="flex flex-col items-center content-center space-y-1 xl:flex-row">
      <div className="w-full xl:w-1/4 text-[14px] font-normal text-text-dark">
        {label}
      </div>
      <div className="flex w-full h-6 overflow-hidden rounded xl:w-3/4">
        {Object.entries(scores).map(([key, value]) => (
          <div
            key={key}
            className={`flex items-center justify-center text-[12px] font-semibold text-white ${
              colors[key] ? `${colors[key]}` : ''
            }`}
            style={{
              width: `${(value / total) * 100}%`,
            }}
          >
            {value} pts
          </div>
        ))}
      </div>
    </div>
  );
}
