import OpportunityCard from './OpportunityCard';
import SearchInput from './SearchInput';
import ShareButton from './ShareButton';

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
        <ShareButton />
      </div>
      <p className="text-[16px] font-medium leading-[20px] tracking-[-0.24px] text-slate-blue">
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
