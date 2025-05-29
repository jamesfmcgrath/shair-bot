// PerformanceBar.jsx
export default function PerformanceBar({ label, value, color }) {
  // Calculate bar width as a percentage (assuming value is 0-100)
  const barWidth = Math.max(0, Math.min(100, Number(value)));

  return (
    <div>
      <div className="flex justify-between text-[14px] font-medium leading-[17.5px] tracking-[-0.24px] mb-1">
        <span className="text-[#262A33]">{label}</span>
        <span className="text-[#4C4F54]">{value}</span>
      </div>
      <div className="w-full h-2 bg-[#F2F2F2] rounded">
        <div
          className="h-2 rounded"
          style={{
            width: `${barWidth}%`,
            backgroundColor: color,
            transition: 'width 0.3s',
          }}
        />
      </div>
    </div>
  );
}
