import { FaSearch } from 'react-icons/fa';

export default function SearchInput({ placeholder, onSearch }) {
  return (
    <div className="relative">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#666] text-sm" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className="w-[300px] h-[32px] pl-10 pr-[10px] py-[7.8px] text-[12px] placeholder-[#666] rounded-[16px] border border-gray-light bg-white"
      />
    </div>
  );
}
