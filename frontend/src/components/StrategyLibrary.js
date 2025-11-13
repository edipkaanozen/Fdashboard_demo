import React from 'react';

const strategies = [
  { name: 'Bullish Outlook', type: 'Long Call' },
  { name: 'Bearish Outlook', type: 'Short Put' },
  { name: 'Volatility Expected', type: 'Long Straddle' },
  { name: 'Neutral Outlook', type: 'Short Strangle' },
  { name: 'Limited Upside', type: 'Call Spread' },
  { name: 'Limited Downside', type: 'Put Spread' },
  { name: 'Range Bound', type: 'Iron Condor' },
  { name: 'Targeted Move', type: 'Butterfly Spread' },
  { name: 'My Strategy 1', type: 'Custom Strategy' },
  { name: 'My Strategy 2', type: 'Custom Strategy' },
];

const StrategyLibrary = () => {
  return (
    <div className="layout-content-container flex flex-col w-80">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Strategy Library</h2>
      {strategies.map((strategy, index) => (
        <div key={index} className="flex items-center gap-4 bg-[#101518] px-4 min-h-[72px] py-2">
          <div className="text-white flex items-center justify-center rounded-lg bg-[#27333a] shrink-0 size-12" data-icon="ChartLine" data-size="24px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-white text-base font-medium leading-normal line-clamp-1">{strategy.name}</p>
            <p className="text-[#9aafbc] text-sm font-normal leading-normal line-clamp-2">{strategy.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StrategyLibrary;
