// src/components/ChartLegend.jsx

export default function ChartLegend() {
  const items = [
    { label: 'Vocabulary', color: '#179BFF' },
    { label: 'Speed', color: '#48A96A' },
    { label: 'Insights', color: '#FFA23B' },
  ];

  return (
    <div className="flex items-center mt-2 space-x-4">
      {items.map(({ label, color }) => (
        <div
          key={label}
          className="flex items-center space-x-1 text-[12px] text-[#262A33]"
        >
          <span
            className="inline-block w-3 h-3 rounded-sm"
            style={{ backgroundColor: color }}
          ></span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
