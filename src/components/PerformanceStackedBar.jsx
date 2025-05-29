// src/components/PerformanceStackedBar.jsx

export default function PerformanceStackedBar({ label, scores }) {
  const colors = {
    vocabulary: '#179BFF',
    speed: '#48A96A',
    insights: '#FFA23B',
  };

  const total = Object.values(scores).reduce((sum, val) => sum + val, 0);

  return (
    <div className="flex flex-col items-center content-center space-y-1 xl:flex-row">
      <div className="w-full xl:w-1/4 text-[14px] font-normal text-[#262A33]">
        {label}
      </div>
      <div className="flex w-full h-6 overflow-hidden rounded xl:w-3/4">
        {Object.entries(scores).map(([key, value]) => (
          <div
            key={key}
            className="flex items-center justify-center text-[12px] font-semibold text-white"
            style={{
              width: `${(value / total) * 100}%`,
              backgroundColor: colors[key],
            }}
          >
            {value} pts
          </div>
        ))}
      </div>
    </div>
  );
}
