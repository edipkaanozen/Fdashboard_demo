import React from 'react';

const GreeksMonitor = () => {
  return (
    <div>
      <div className="flex justify-between gap-x-6 py-2">
        <p className="text-[#8db6ce] text-sm font-normal leading-normal">Net Delta</p>
        <p className="text-white text-sm font-normal leading-normal text-right">0.25</p>
      </div>
      <div className="flex justify-between gap-x-6 py-2">
        <p className="text-[#8db6ce] text-sm font-normal leading-normal">Theta</p>
        <p className="text-white text-sm font-normal leading-normal text-right">-15</p>
      </div>
      <div className="flex justify-between gap-x-6 py-2">
        <p className="text-[#8db6ce] text-sm font-normal leading-normal">Vega</p>
        <p className="text-white text-sm font-normal leading-normal text-right">10</p>
      </div>
      <div className="flex justify-between gap-x-6 py-2">
        <p className="text-[#8db6ce] text-sm font-normal leading-normal">Gamma</p>
        <p className="text-white text-sm font-normal leading-normal text-right">0.02</p>
      </div>
    </div>
  );
};

export default GreeksMonitor;
