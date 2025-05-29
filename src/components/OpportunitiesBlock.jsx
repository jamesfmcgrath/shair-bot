import OpportunityCard from './OpportunityCard';
import SearchInput from './SearchInput';

export default function OpportunitiesBlock() {
  return (
    <section
      className="px-6 py-5 space-y-4 bg-white rounded-lg shadow"
      id="opportunities-block"
    >
      <div className="flex flex-col justify-between xl:items-center xl:flex-row">
        <h2 className="text-[20px] font-medium leading-[25px] tracking-[0.2px] text-text-dark">
          Shair.bot Opportunities
        </h2>
        <SearchInput
          placeholder="Search..."
          onSearch={(value) => console.log(value)}
        />
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
      <p className="text-[16px] font-medium leading-[20px] tracking-[-0.24px] text-[#5C6B80]">
        Keep adding value with what you know! Explore related shairs or discover
        new topics you're qualified for. Every response adds value and boosts
        your knowledge points.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <OpportunityCard
          title="Shair Title"
          category="Category 1"
          description="Lorem ipsum dolor sit amet consectetur adipis cing elit."
          points={80}
          price="00"
        />

        <OpportunityCard
          title="Shair Title"
          category="Category 2"
          description="Lorem ipsum dolor sit amet consectetur adipis cing elit."
          points={85}
          price="00"
        />

        <OpportunityCard
          title="Shair Title"
          category="Category 3"
          description="Lorem ipsum dolor sit amet consectetur adipis cing elit."
          points={90}
          price="00"
        />
      </div>
    </section>
  );
}
