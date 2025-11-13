import React from 'react';
import StrategyBuilder from './StrategyBuilder';

const Strategies = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#0f1c24] dark group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <StrategyBuilder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategies;
