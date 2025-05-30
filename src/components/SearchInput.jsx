import { FaSearch } from 'react-icons/fa';

export default function SearchInput({ placeholder, onSearch }) {
  return (
    <div className="relative">
      <FaSearch className="absolute text-sm -translate-y-1/2 left-3 top-1/2 text-steel-gray" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className="w-[300px] h-[32px] pl-10 pr-[10px] py-[7.8px] text-[12px] placeholder-steel-gray rounded-[16px] border border-gray-light bg-white"
      />
    </div>
  );
}
