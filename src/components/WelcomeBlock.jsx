import CategoryBadge from './CategoryBadge';
import DonutChart from './DonutChart';
import PerformanceBar from './PerformanceBar';

const performanceData = [
  { label: 'Tech', value: 75, color: 'bg-brand-orange' },
  { label: 'Health', value: 39, color: 'bg-brand-blue' },
  { label: 'Science', value: 44, color: 'bg-brand-navy' },
  { label: 'Culture', value: 94, color: 'bg-brand-yellow' },
];

const totalPoints = performanceData.reduce((sum, bar) => sum + bar.value, 0);

const myCategories = ['Tech', 'Health', 'Science', 'Culture'];
const relatedCategories = ['Design', 'Research', 'Food'];

export default function WelcomeBlock() {
  return (
    <section
      className="p-6 space-y-4 bg-white border border-white rounded-md shadow"
      id="welcome-block"
    >
      <h2 className="text-[20px] font-medium leading-[21px] text-text-dark">
        Welcome back, Taylor!
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <DonutChart value={totalPoints} />

        {/* Bars with SVGs */}
        <div className="space-y-4">
          {performanceData.map((bar) => (
            <PerformanceBar key={bar.label} {...bar} />
          ))}
        </div>

        {/* Categories */}
        <div className="space-y-2">
          {/* My Categories */}
          <h3 className="text-text-dark text-[14px] font-bold leading-[20px] tracking-[-0.24px]">
            My Categories
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {myCategories.map((cat) => (
              <CategoryBadge key={cat} text={cat} />
            ))}
          </div>
          {/* Related Categories */}
          <h3 className="text-[#262A33] text-[14px] font-bold leading-[20px] tracking-[-0.24px] mt-4">
            Related Categories
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {relatedCategories.map((cat) => (
              <CategoryBadge key={cat} text={cat} />
            ))}
          </div>
        </div>
      </div>

      {/* Text */}
      <p className="text-[14px] font-bold text-steel-gray">
        You’re doing great. With an overall total of {totalPoints} points you
        are in the{' '}
        <span className="inline-flex items-center justify-center gap-[1.85px] px-[6px] py-[4px] rounded-[6px] bg-background-green text-forest-green text-[14px] font-bold leading-[17.5px]">
          Top 10!
        </span>
        <br />
        <span className="text-[12px] font-normal text-steel-gray">
          Take another shair to stay in the top 10
        </span>
      </p>
    </section>
  );
}
