// PerformanceBar.jsx
export default function PerformanceBar({ label, value, color }) {
  return (
    <div>
      <div className="flex justify-between text-[14px] font-medium leading-[17.5px]">
        <span className="text-[#262A33]">{label}</span>
        <span className="text-[#4C4F54]">{value}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="8"
        viewBox="0 0 200 8"
        fill="none"
      >
        <rect
          x="0.226562"
          y="8"
          width="7.99999"
          height="199.774"
          rx="4"
          transform="rotate(-90 0.226562 8)"
          fill="#F2F2F2"
        />
        <rect
          y="8"
          width="8"
          height={value}
          rx="4"
          transform="rotate(-90 0 8)"
          fill={color}
        />
      </svg>
    </div>
  );
}
