// src/components/CategoryBadge.jsx
export default function CategoryBadge({ text }) {
  return (
    <span className="flex justify-center items-center gap-[10px] px-[10px] py-[2px] rounded-[6px] bg-snow text-[12px] text-brand-navy font-medium leading-[15px]">
      {text}
    </span>
  );
}
