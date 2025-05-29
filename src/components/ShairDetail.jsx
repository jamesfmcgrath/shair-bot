import ChartLegend from './ChartLegend';
import ComparisonStats from './ComparisonStats';
import PerformanceStackedBar from './PerformanceStackedBar';
import PerformanceTotalBar from './PerformanceTotalBar';
import ProgressChart from './ProgressChart';

export default function ShairDetail() {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="text-[16px] font-light text-[#4C4F54]">
          Overview:{' '}
          <span className="inline text-[16px] font-bold text-[#4C4F54]">
            {' '}
            Shair Title: New!
          </span>
        </div>
        <span className="ml-2 text-[12px] font-medium bg-[#F4F7FC] text-brand-navy px-2 py-1 rounded-[6px]">
          Category 1
        </span>
      </div>

      <h4 className="text-[16px] font-semibold text-[#262A33]">
        My Performance
      </h4>
      <p className="text-[14px] font-normal leading-[20px] tracking-[-0.24px] text-[#5C6B80]">
        In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed
        diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
        egestas. Iaculis massa nisl malesuada lacinia.
      </p>

      <div className="flex flex-col gap-8 md:flex-row">
        {/* Left column: Total + Subcategories + Legend */}
        <div className="w-3/4 space-y-4">
          <PerformanceTotalBar value={63} />
          <PerformanceStackedBar
            label="Subcategory 1"
            scores={{ vocabulary: 21, speed: 10, insights: 3 }}
          />
          <PerformanceStackedBar
            label="Subcategory 2"
            scores={{ vocabulary: 11, speed: 7, insights: 11 }}
          />
          <ChartLegend />
        </div>

        {/* Right column: Area Chart */}
        <ProgressChart />
      </div>

      <div className="h-[60px] rounded flex items-center justify-center">
        <ComparisonStats highest={76} lowest={31} total={63} rank="Top 10%" />
      </div>
    </div>
  );
}
