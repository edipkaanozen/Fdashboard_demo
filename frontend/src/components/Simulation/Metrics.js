import React from 'react';

const Metrics = () => {
  return (
    <div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Metrics</h2>
      <div className="flex flex-wrap gap-4 p-4">
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#27333a]">
          <p className="text-white text-base font-medium leading-normal">CAGR</p>
          <p className="text-white tracking-light text-2xl font-bold leading-tight">12.5%</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#27333a]">
          <p className="text-white text-base font-medium leading-normal">Sharpe Ratio</p>
          <p className="text-white tracking-light text-2xl font-bold leading-tight">1.2</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#27333a]">
          <p className="text-white text-base font-medium leading-normal">Max Drawdown</p>
          <p className="text-white tracking-light text-2xl font-bold leading-tight">8.3%</p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#27333a]">
          <p className="text-white text-base font-medium leading-normal">Hit Ratio (Win Rate)</p>
          <p className="text-white tracking-light text-2xl font-bold leading-tight">60%</p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
