import { FaCaretDown } from 'react-icons/fa';
import SearchInput from './SearchInput';
import ShairDetail from './ShairDetail';
import ShareButton from './ShareButton';

export default function CompletedShairs() {
  const shairs = [
    'Shair Title: New!',
    'Shair Title Example 1',
    'Shair Title',
    'Shair Title',
    'Shair Title',
    'Shair Title',
  ];

  return (
    <section
      className="bg-white rounded-lg shadow xl:col-span-3"
      id="shairs-block"
    >
      {/* Top Row: Buttons + Search */}
      <div className="flex flex-col items-center justify-between p-6 pb-4 border-b xl:flex-row border-gray-light">
        <div className="flex space-x-2">
          <button className="flex h-[32px] px-4 py-1 items-center justify-center text-[16px] font-medium text-rich-black bg-background-blue rounded-full leading-[20px] tracking-[0.16px]">
            Completed Shairs
          </button>
          <button className="flex h-[32px] px-4 py-1 items-center justify-center text-[16px] font-normal text-[#666] bg-gray-light rounded-full leading-[20px]">
            Research Projects
          </button>
        </div>
        <SearchInput placeholder="Search" onSearch={() => {}} />
        <ShareButton />
      </div>

      {/* Second Row: Grid */}
      <div className="flex flex-col xl:flex-row">
        {/* Left Sidebar */}
        <aside className="xl:w-1/4 text-[12px] font-normal leading-[15px] bg-gray-light border-r border-gray-light">
          <div className="flex items-center h-[60px] px-3 text-text-dark text-[16px] bg-white">
            Shair <FaCaretDown />
          </div>
          {shairs.map((title, idx) => (
            <div
              key={title}
              className={`flex items-center h-[48px] px-3 ${
                idx === 0
                  ? 'bg-background-blue text-[#262A33] font-semibold'
                  : idx % 2 === 0
                  ? 'bg-gray-light text-[#262A33]'
                  : 'bg-white text-[#262A33]'
              }`}
            >
              {title}
            </div>
          ))}
        </aside>

        {/* Right Content */}
        <div className="xl:w-3/4">
          <ShairDetail />
        </div>
      </div>
    </section>
  );
}
