// src/components/TargetedResearch.jsx
import chartImage from '../assets/targeted-research-chart.png';

export default function TargetedResearch() {
  return (
    <section className="overflow-hidden rounded-lg shadow">
      {/* Header */}
      <div className="inline-flex w-full px-[20px] py-[16px] items-center rounded-t-[6px] bg-white">
        <h2 className="text-[20px] font-medium leading-[25px] tracking-[0.2px] text-[#262A33]">
          Targeted Research
        </h2>
      </div>
      {/* Content */}
      <div className="bg-[#607DA9] text-white rounded-b-[6px] p-5 space-y-6">
        <div>
          <h3 className="text-[18px] font-bold leading-[25.2px] tracking-[-0.24px]">
            Ready to unlock deeper insights and start your own research?
          </h3>
          <p className="text-[16px] font-normal leading-[22.4px] tracking-[-0.24px] mt-2">
            Purchase targeted shairs and tap into our network of expert survey
            takers. Get high-quality responses faster and make smarter decisions
            with confidence.
          </p>
          <button className="inline-flex items-center gap-[4px] px-[10px] py-[2px] mt-4 rounded-[8px] bg-[#FFA23B] text-white text-[12px] font-bold leading-[20px] transition-colors duration-200 hover:bg-[#FFB95E] hover:text-[#262A33] focus:outline-none focus:ring-2 focus:ring-[#FFA23B]">
            Learn more →
          </button>
        </div>

        {/* Placeholder Chart */}
        <div className="relative flex w-full p-4 overflow-hidden rounded">
          <img
            src={chartImage}
            alt="Targeted research chart"
            className="object-contain w-full h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
}
