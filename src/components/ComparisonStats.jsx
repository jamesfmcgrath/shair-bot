// src/components/ComparisonStats.jsx
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

export default function ComparisonStats({
  highest = 76,
  lowest = 31,
  total = 63,
  rank = 'Top 10%',
}) {
  return (
    <div className="space-y-2">
      <h4 className="text-[16px] font-semibold text-[#262A33]">
        User Knowledge Points Comparison
      </h4>
      <div className="flex flex-wrap items-center gap-4">
        {/* Highest Points */}
        <div className="flex items-center gap-2 px-3 py-1 border border-[#D9D9D9] rounded-[8px] bg-white">
          <span className="text-[11px] text-[#474747]">
            Highest Points Scored
          </span>
          <span className="flex items-center gap-1 px-2 py-[3.5px] text-[11px] rounded bg-[#E8FFE1] text-[#28964F] font-semibold">
            <FaArrowUp className="text-[10px]" /> {highest}
          </span>
        </div>

        {/* Lowest Points */}
        <div className="flex items-center gap-2 px-3 py-1 border border-[#D9D9D9] rounded-[8px] bg-white">
          <span className="text-[11px] text-[#474747]">
            Lowest Points Scored
          </span>
          <span className="flex items-center gap-1 px-2 py-[3.5px] text-[11px] rounded bg-[#FBF0F1] text-[#D64550] font-semibold">
            <FaArrowDown className="text-[10px]" /> {lowest}
          </span>
        </div>

        {/* Ranking Message */}
        <p className="text-[14px] font-medium text-[#262A33]">
          With a total of {total} points you’re in the{' '}
          <span className="inline-flex items-center justify-center gap-[1.85px] px-[6px] py-[4px] rounded-[6px] bg-[#E8FFE1] text-[#28964F] text-[14px] font-bold leading-[17.5px]">
            {rank}!
          </span>
        </p>
      </div>
    </div>
  );
}
