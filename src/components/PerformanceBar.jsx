// PerformanceBar.jsx
export default function PerformanceBar({ label, value, color }) {
  // Calculate bar width as a percentage (assuming value is 0-100)
  const barWidth = Math.max(0, Math.min(100, Number(value)));

  return (
    <div>
      <div className="flex justify-between text-[14px] font-medium leading-[17.5px] tracking-[-0.24px] mb-1">
        <span className="text-text-dark">{label}</span>
        <span className={`text-charcoal ${color ? `text-[${color}]` : ''}`}>
          {value}
        </span>
      </div>
      <div className="w-full h-2 rounded bg-gray-light">
        <div
          className={`h-2 rounded ${color ? `${color}` : ''}`}
          style={{
            width: `${barWidth}%`,
            transition: 'width 0.3s',
          }}
        />
      </div>
    </div>
  );
}
