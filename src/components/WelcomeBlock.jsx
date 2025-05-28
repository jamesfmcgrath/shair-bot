import CategoryBadge from './CategoryBadge';
import DonutChart from './DonutChart';
import PerformanceBar from './PerformanceBar';

const performanceData = [
  { label: 'Tech', value: 75, color: '#FFA23B' },
  { label: 'Health', value: 39, color: '#179BFF' },
  { label: 'Science', value: 44, color: '#607DA9' },
  { label: 'Culture', value: 94, color: '#FFD53B' },
];

const totalPoints = performanceData.reduce((sum, bar) => sum + bar.value, 0);

const myCategories = ['Design', 'Research', 'AI', 'Health'];
const relatedCategories = ['Science', 'Tech', 'Culture'];

export default function WelcomeBlock() {
  return (
    <section
      className="p-6 space-y-4 bg-white border border-white rounded-md shadow"
      id="welcome-block"
    >
      <h2 className="text-[20px] font-medium leading-[21px] text-text-dark">
        Welcome back, Taylor!
      </h2>
      <div className="grid grid-cols-3 gap-4">
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
          <h3 className="text-[#262A33] text-[14px] font-bold leading-[20px] tracking-[-0.24px]">
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
      <p className="text-sm text-text-muted">
        You're currently in the top 10% of participants this week. Keep up the
        great work!
      </p>
    </section>
  );
}
