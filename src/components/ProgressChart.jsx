import chartImage from '../assets/chart1.png';
export default function ProgressChart() {
  return (
    <div className="relative overflow-hidden xl:w-1/4">
      <img
        src={chartImage}
        alt="Targeted research chart"
        className="object-contain w-full h-auto rounded"
      />
    </div>
  );
}
