export default function DashboardCard({ title, value, description }) {
  return (
    <div className="p-4 bg-white border rounded-lg shadow border-border">
      <h2 className="text-lg font-semibold text-text">{title}</h2>
      <p className="mt-2 text-2xl font-bold text-primary">{value}</p>
      <p className="mt-1 text-sm text-muted">{description}</p>
    </div>
  );
}
