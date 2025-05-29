import { FaCaretDown } from 'react-icons/fa';
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
      className="bg-white rounded-lg shadow  xl:col-span-3"
      id="shairs-block"
    >
      {/* Top Row: Buttons + Search */}
      <div className="flex flex-col items-center justify-between p-6 pb-4 border-b xl:flex-row border-gray-light">
        <div className="flex space-x-2">
          <button className="flex h-[32px] px-4 py-1 items-center justify-center text-[16px] font-medium text-[#1C1F23] bg-background-blue rounded-full leading-[20px] tracking-[0.16px]">
            Completed Shairs
          </button>
          <button className="flex h-[32px] px-4 py-1 items-center justify-center text-[16px] font-normal text-[#666] bg-gray-light rounded-full leading-[20px]">
            Research Projects
          </button>
        </div>
        <SearchInput placeholder="Search" onSearch={() => {}} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M6.30957 14.0498C6.41482 14.0498 6.5196 14.0184 6.6084 13.9561L8.99023 12.2852L9.07617 12.208C9.15172 12.1224 9.19519 12.0129 9.19531 11.8984V7.54883L13.8984 3.16211L13.9629 3.08887C14.019 3.0098 14.0498 2.91514 14.0498 2.81836V1.43164C14.0498 1.16388 13.8208 0.950195 13.5449 0.950195H1.45508C1.17927 0.950195 0.950195 1.16387 0.950195 1.43164V2.81836C0.950196 2.94722 1.00548 3.07225 1.10156 3.16211L5.80469 7.54883V13.5684C5.80469 13.7525 5.9124 13.9174 6.08301 13.999L6.19434 14.0371C6.23237 14.0457 6.27102 14.0498 6.30957 14.0498ZM6.68457 7.39746C6.68457 7.30083 6.65279 7.20607 6.59668 7.12695L6.53223 7.05273L1.8291 2.66699V1.78906H13.1709V2.66699L8.46777 7.05273C8.37142 7.14247 8.31543 7.26821 8.31543 7.39746V11.7178L6.68457 12.8613V7.39746Z"
            fill="#4C4F54"
            stroke="#4C4F54"
            stroke-width="0.1"
          />
        </svg>
      </div>

      {/* Second Row: Grid */}
      <div className="flex flex-col xl:flex-row">
        {/* Left Sidebar */}
        <aside className="xl:w-1/4 text-[12px] font-normal leading-[15px] bg-gray-light border-r border-gray-light">
          <div className="flex items-center h-[60px] px-3 text-[#262A33] text-[16px] bg-white">
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
