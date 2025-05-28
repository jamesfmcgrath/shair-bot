export default function OpportunityCard({
  title,
  category,
  description,
  points,
  price,
}) {
  return (
    <div className="p-4 rounded-[6px] bg-background-blue space-y-2">
      <div className="flex items-start justify-between">
        <h3 className="text-[14px] font-bold leading-[20px] tracking-[-0.24px] text-text-dark">
          {title}
        </h3>
        <span className="text-[12px] font-medium leading-[15px] bg-[#F4F7FC] px-2 py-1 rounded-[6px] text-brand-navy">
          {category}
        </span>
      </div>
      <p className="text-[14px] font-normal leading-[20px] tracking-[-0.24px] text-text-dark">
        {description}
      </p>
      <button className="px-4 py-1 text-[12px] font-bold leading-[20px] text-white bg-[#3988FF] rounded-[8px]">
        Get Started →
      </button>
      <hr className="border-t border-[#C6D9F5]" />
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
