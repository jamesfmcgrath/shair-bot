import SearchInput from './SearchInput';
import ShairDetail from './ShairDetail';

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
      className="p-6 space-y-4 bg-white rounded-lg shadow xl:col-span-3"
      id="shairs-block"
    >
      {/* Top Row: Buttons + Search */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <button className="flex h-[32px] px-4 py-1 items-center justify-center text-[16px] font-medium text-[#1C1F23] bg-background-blue rounded-full leading-[20px] tracking-[0.16px]">
            Completed Shairs
          </button>
          <button className="flex h-[32px] px-4 py-1 items-center justify-center text-[16px] font-normal text-[#666] bg-gray-light rounded-full leading-[20px]">
            Research Projects
          </button>
        </div>
        <SearchInput placeholder="Search" onSearch={() => {}} />
      </div>

      {/* Second Row: Grid */}
      <div className="flex gap-4 mt-4">
        {/* Left Sidebar */}
        <aside className="w-1/3 text-[12px] font-normal leading-[15px] bg-gray-light">
          <div className="flex items-center h-[60px] px-3 text-[#262A33] text-[16px] bg-white">
            Shair
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
        <div className="w-2/3">
          <ShairDetail />
        </div>
      </div>
    </section>
  );
}
