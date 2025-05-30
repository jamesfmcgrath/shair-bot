import CategoryBadge from './CategoryBadge';
import ChartLegend from './ChartLegend';
import ComparisonStats from './ComparisonStats';
import PerformanceStackedBar from './PerformanceStackedBar';
import PerformanceTotalBar from './PerformanceTotalBar';
import ProgressChart from './ProgressChart';

export default function ShairDetail() {
  return (
    <div>
      <div className="flex items-center p-4 border-b border-pale-blue">
        <div className="text-[16px] font-light text-charcoal">
          Overview:{' '}
          <span className="inline text-[16px] font-bold text-charcoal mr-2">
            {' '}
            Shair Title: New!
          </span>
        </div>
        <CategoryBadge key="Category 1" text="Category 1" />
      </div>

      <div className="p-4 space-y-4">
        <h4 className="text-[16px] font-semibold text-text-dark">
          My Performance
        </h4>
        <p className="text-[14px] font-normal leading-[20px] tracking-[-0.24px] text-slate-blue">
          In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean
          sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus
          bibendum egestas. Iaculis massa nisl malesuada lacinia.
        </p>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Left column: Total + Subcategories + Legend */}
          <div className="space-y-4 xl:w-3/4">
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

        <div className="flex items-center py-6 rounded">
          <ComparisonStats highest={76} lowest={31} total={63} rank="Top 10%" />
        </div>
      </div>
    </div>
  );
}
