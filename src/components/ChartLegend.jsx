// src/components/ChartLegend.jsx

export default function ChartLegend() {
  const items = [
    { label: 'Vocabulary', color: 'bg-brand-blue' },
    { label: 'Speed', color: 'bg-success-green' },
    { label: 'Insights', color: 'bg-brand-orange' },
  ];

  return (
    <div className="flex items-center mt-2 space-x-4">
      {items.map(({ label, color }) => (
        <div
          key={label}
          className="flex items-center space-x-1 text-[12px] text-text-dark"
        >
          <span className={`inline-block w-3 h-3 rounded-sm ${color}`}></span>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
