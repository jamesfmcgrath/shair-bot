import CategoryBadge from './CategoryBadge';

export default function OpportunityCard({
  title,
  category,
  description,
  points,
  price,
}) {
  return (
    <div className="p-3 rounded-[6px] bg-background-blue space-y-2 transition-shadow hover:shadow-lg hover:bg-pale-sky">
      <div className="flex items-start justify-between">
        <h3 className="text-[14px] font-bold leading-[20px] tracking-[-0.24px] text-text-dark">
          {title}
        </h3>
        <CategoryBadge key={category} text={category} />
      </div>
      <p className="text-[14px] font-normal leading-[20px] tracking-[-0.24px] text-text-dark">
        {description}
      </p>
      <button className="px-4 py-1 text-[12px] font-bold leading-[20px] text-white bg-vivid-blue rounded-[8px] transition-colors hover:bg-indigo-blue">
        Get Started →
      </button>
      <hr className="border-t border-sky-blue" />
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-bold text-text-dark">
          Up to {points} Knowledge Points
        </span>
        <span className="text-[16px] font-normal leading-[20px] text-text-dark">
          ${price}
        </span>
      </div>
    </div>
  );
}
