// src/App.jsx
import { FaUserCircle } from 'react-icons/fa';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-light text-text-dark">
      {/* Header */}
      <header className="flex items-center justify-between h-16 px-6 text-white shadow bg-brand-navy">
        <h1 className="text-xl font-bold tracking-tight">Shair.bot</h1>
        <div className="flex items-center space-x-2 text-sm font-medium">
          <span>Taylor Morgan</span>
          <FaUserCircle className="w-5 h-5" />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6 p-6 xl:grid-cols-2">
        {/* Top Row: Welcome + Opportunities */}
        {/* Top Row: Welcome + Opportunities */}
        <section
          className="p-6 space-y-4 bg-white border border-white rounded-md shadow"
          id="welcome-block"
        >
          <h2 className="text-[20px] font-medium leading-[21px] text-text-dark">
            Welcome back, Taylor!
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Chart */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-[171px] h-[171px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="171"
                  height="171"
                  viewBox="0 0 171 171"
                  fill="none"
                >
                  <path
                    d="M152.936 43.9104C155.763 42.181 156.669 38.4732 154.745 35.7751C147.81 26.0492 138.895 17.8693 128.562 11.7876C118.23 5.70588 106.751 1.88238 94.881 0.540173C91.5883 0.167834 88.7866 2.76004 88.6466 6.07079L88.4328 11.1256C88.2928 14.4363 90.8696 17.2066 94.1553 17.6368C103.227 18.8246 111.989 21.8277 119.909 26.4894C127.829 31.1511 134.708 37.3536 140.15 44.7086C142.121 47.3724 145.794 48.2805 148.621 46.551L152.936 43.9104Z"
                    fill="#179BFF"
                  />
                  <path
                    d="M85.2966 6C85.2966 2.68629 82.6067 -0.0219742 79.3011 0.210893C62.5513 1.39089 46.4722 7.49482 33.1187 17.8209C19.7652 28.1469 9.81225 42.1732 4.45613 58.0874C3.39912 61.228 5.34351 64.5128 8.55063 65.3465L13.4472 66.6193C16.6543 67.453 19.9049 65.5169 21.017 62.3954C25.386 50.1319 33.1897 39.3307 43.5542 31.316C53.9188 23.3013 66.3358 18.466 79.304 17.3229C82.605 17.0319 85.2966 14.373 85.2966 11.0593V6Z"
                    fill="#FFA23B"
                  />
                  <path
                    d="M153.991 45.6852C156.861 44.0298 160.551 45.0071 162.001 47.987C167.409 59.1049 170.346 71.2889 170.578 83.698C170.811 96.107 168.332 108.393 163.345 119.705C162.008 122.737 158.358 123.852 155.427 122.306L150.952 119.944C148.022 118.398 146.926 114.777 148.21 111.721C151.882 102.978 153.7 93.5433 153.522 84.0177C153.343 74.4921 151.173 65.1322 147.175 56.5326C145.778 53.5276 146.737 49.8678 149.608 48.2125L153.991 45.6852Z"
                    fill="#607DA9"
                  />
                  <path
                    d="M154.011 124.872C156.883 126.526 157.887 130.209 156.036 132.957C145.81 148.135 130.936 159.67 113.569 165.771C94.3101 172.537 73.2629 172.172 54.25 164.742C35.237 157.312 19.5191 143.31 9.95075 125.278C1.32272 109.018 -1.78916 90.4546 0.985848 72.365C1.48831 69.0896 4.72347 67.0638 7.95546 67.7952L12.89 68.9118C16.122 69.6432 18.1213 72.8552 17.6765 76.1389C15.7674 90.2335 18.3062 104.63 25.0199 117.282C32.6746 131.707 45.2489 142.909 60.4593 148.853C75.6697 154.797 92.5074 155.089 107.915 149.676C121.428 144.929 133.055 136.069 141.209 124.414C143.108 121.699 146.756 120.694 149.627 122.347L154.011 124.872Z"
                    fill="#FFD53B"
                  />
                </svg>
              </div>
              <p className="mt-2 text-[26px] font-bold text-[#2E2E30] text-center">
                128
              </p>
              <p className="text-[12px] font-medium text-[#666] text-center">
                Knowledge Points
              </p>
            </div>

            {/* Bars with SVGs */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-[14px] font-medium leading-[17.5px]">
                  <span className="text-[#262A33]">Tech</span>
                  <span className="text-[#4C4F54]">75</span>
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
                    height="75"
                    rx="4"
                    transform="rotate(-90 0 8)"
                    fill="#FFA23B"
                  />
                </svg>
              </div>
              <div>
                <div className="flex justify-between text-[14px] font-medium leading-[17.5px]">
                  <span className="text-[#262A33]">Health</span>
                  <span className="text-[#4C4F54]">39</span>
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
                    height="39"
                    rx="4"
                    transform="rotate(-90 0 8)"
                    fill="#179BFF"
                  />
                </svg>
              </div>
              <div>
                <div className="flex justify-between text-[14px] font-medium leading-[17.5px]">
                  <span className="text-[#262A33]">Science</span>
                  <span className="text-[#4C4F54]">44</span>
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
                    height="44"
                    rx="4"
                    transform="rotate(-90 0 8)"
                    fill="#607DA9"
                  />
                </svg>
              </div>
              <div>
                <div className="flex justify-between text-[14px] font-medium leading-[17.5px]">
                  <span className="text-[#262A33]">Culture</span>
                  <span className="text-[#4C4F54]">94</span>
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
                    height="94"
                    rx="4"
                    transform="rotate(-90 0 8)"
                    fill="#FFD53B"
                  />
                </svg>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <h3 className="text-[#262A33] text-[14px] font-bold leading-[20px] tracking-[-0.24px]">
                My Categories
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <span className="flex justify-center items-center gap-[10px] px-[10px] py-[2px] rounded-[6px] bg-[#F4F7FC] text-[12px] text-brand-navy font-medium leading-[15px]">
                  Design
                </span>
                <span className="flex justify-center items-center gap-[10px] px-[10px] py-[2px] rounded-[6px] bg-[#F4F7FC] text-[12px] text-brand-navy font-medium leading-[15px]">
                  Research
                </span>
                <span className="flex justify-center items-center gap-[10px] px-[10px] py-[2px] rounded-[6px] bg-[#F4F7FC] text-[12px] text-brand-navy font-medium leading-[15px]">
                  AI
                </span>
                <span className="flex justify-center items-center gap-[10px] px-[10px] py-[2px] rounded-[6px] bg-[#F4F7FC] text-[12px] text-brand-navy font-medium leading-[15px]">
                  Health
                </span>
              </div>
              <h3 className="text-[#262A33] text-[14px] font-bold leading-[20px] tracking-[-0.24px] mt-4">
                Related Categories
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <span className="flex justify-center items-center gap-[10px] px-[10px] py-[2px] rounded-[6px] bg-[#F4F7FC] text-[12px] text-brand-navy font-medium leading-[15px]">
                  Science
                </span>
                <span className="flex justify-center items-center gap-[10px] px-[10px] py-[2px] rounded-[6px] bg-[#F4F7FC] text-[12px] text-brand-navy font-medium leading-[15px]">
                  Tech
                </span>
                <span className="flex justify-center items-center gap-[10px] px-[10px] py-[2px] rounded-[6px] bg-[#F4F7FC] text-[12px] text-brand-navy font-medium leading-[15px]">
                  Culture
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <p className="text-sm text-text-muted">
            You're currently in the top 10% of participants this week. Keep up
            the great work!
          </p>
        </section>

        <section
          className="p-6 space-y-4 bg-white rounded-lg shadow"
          id="opportunities-block"
        >
          <h2 className="text-xl font-bold">Shair.bot Opportunities</h2>
          <p className="text-sm text-text-muted">
            Discover new research opportunities tailored to your expertise. Join
            to earn rewards and expand your knowledge base.
          </p>
          <div className="flex items-center justify-center h-40 rounded-lg bg-background-blue">
            <span className="font-semibold text-brand-navy">
              [Opportunity Cards Grid]
            </span>
          </div>
          <button className="w-full px-4 py-2 mt-4 font-medium text-white transition rounded bg-brand-blue hover:bg-hover-blue">
            View All
          </button>
        </section>

        {/* Second Row: Shairs 75% / Targeted Research 25% */}
        <div className="col-span-2 gap-6 xl:grid xl:grid-cols-4">
          <section
            className="p-6 space-y-4 bg-white rounded-lg shadow xl:col-span-3"
            id="shairs-block"
          >
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <button className="px-4 py-1 text-sm text-white rounded-full bg-brand-blue">
                  Completed Shairs
                </button>
                <button className="px-4 py-1 text-sm rounded-full bg-gray-light text-text-dark">
                  Research Projects
                </button>
              </div>
              <input
                type="text"
                placeholder="Search Shairs..."
                className="w-1/3 px-3 py-1 text-sm border rounded border-border-gray"
              />
            </div>
            <div className="flex gap-4 mt-4">
              {/* Left Sidebar */}
              <aside className="w-1/3 space-y-2">
                <div className="p-3 rounded cursor-pointer bg-background-blue hover:bg-brand-blue hover:text-white">
                  Shair #1
                </div>
                <div className="p-3 rounded cursor-pointer bg-background-blue hover:bg-brand-blue hover:text-white">
                  Shair #2
                </div>
                <div className="p-3 rounded cursor-pointer bg-background-blue hover:bg-brand-blue hover:text-white">
                  Shair #3
                </div>
              </aside>
              {/* Main Content */}
              <div className="w-2/3 space-y-3">
                <h3 className="text-lg font-bold">
                  Shair #1: AI Research Insights
                </h3>
                <span className="px-2 py-1 text-xs text-black rounded bg-brand-yellow">
                  Category: Technology
                </span>
                <p className="text-sm">
                  In this research, you explored emerging uses of AI in
                  healthcare. Below is your knowledge performance:
                </p>
                <div className="flex items-center justify-center h-24 rounded bg-background-blue">
                  [Chart Placeholder]
                </div>
                <p className="text-sm font-medium text-text-muted">
                  Compared to your peers, you scored 12% higher in accuracy and
                  18% higher in engagement.
                </p>
              </div>
            </div>
          </section>

          <section
            className="p-6 bg-white rounded-lg shadow xl:col-span-1"
            id="targeted-research-block"
          >
            <h2 className="text-xl font-bold">Targeted Research</h2>
            <p className="text-sm text-text-muted">
              Research tailored to your profile and interests. Join a session to
              earn rewards and contribute valuable insights.
            </p>
            <div className="flex items-center justify-center h-40 rounded-lg bg-background-green">
              <span className="font-semibold text-success-green">
                [Vertical Bar Chart]
              </span>
            </div>
            <button className="w-full px-4 py-2 mt-4 font-medium text-white transition rounded bg-success-green hover:bg-emerald-600">
              Learn More
            </button>
          </section>
        </div>
      </div>

      {/* Floating Button */}
      <button className="fixed px-5 py-3 font-semibold text-white rounded-full shadow-lg bottom-6 right-6 bg-brand-orange hover:bg-brand-yellow">
        ✳ Shair.bot
      </button>
    </div>
  );
}
