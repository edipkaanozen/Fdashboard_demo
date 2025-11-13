import React from 'react';

const KeyMetrics = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between gap-x-6 py-2">
        <p className="text-[#9aafbc] text-sm font-normal leading-normal">Max Profit</p>
        <p className="text-white text-sm font-normal leading-normal text-right">Unlimited</p>
      </div>
      <div className="flex justify-between gap-x-6 py-2">
        <p className="text-[#9aafbc] text-sm font-normal leading-normal">Max Loss</p>
        <p className="text-white text-sm font-normal leading-normal text-right">$100</p>
      </div>
      <div className="flex justify-between gap-x-6 py-2">
        <p className="text-[#9aafbc] text-sm font-normal leading-normal">Breakeven(s)</p>
        <p className="text-white text-sm font-normal leading-normal text-right">115</p>
      </div>
      <div className="flex justify-between gap-x-6 py-2">
        <p className="text-[#9aafbc] text-sm font-normal leading-normal">Margin</p>
        <p className="text-white text-sm font-normal leading-normal text-right">$500</p>
      </div>
    </div>
  );
};

export default KeyMetrics;
