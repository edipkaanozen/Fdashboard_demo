import React, { useState } from 'react';
import PayoffGraph from './PayoffGraph';
import PLChart from './PLChart';
import LegControls from './LegControls';
import StrategyKeyMetrics from './StrategyKeyMetrics';

const StrategyBuilder = () => {
  const [activeTab, setActiveTab] = useState('payoff');
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Strategy Builder</h2>
      <div className="pb-3">
        <div className="flex border-b border-[#394b56] px-4 gap-8">
          <button type="button" onClick={() => setActiveTab('payoff')} className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'payoff' ? 'border-b-white text-white' : 'border-b-transparent text-[#9aafbc]'} pb-[13px] pt-4`}>
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Payoff Graph</p>
          </button>
          <button type="button" onClick={() => setActiveTab('plchart')} className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'plchart' ? 'border-b-white text-white' : 'border-b-transparent text-[#9aafbc]'} pb-[13px] pt-4`}>
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">P/L Chart</p>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 px-4 py-6">
        {activeTab === 'payoff' && <PayoffGraph />}
      </div>
      <div className="flex flex-wrap gap-4 px-4 py-6">
        {activeTab === 'plchart' && <PLChart />}
      </div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Leg Controls</h2>
      <LegControls />
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Key Metrics</h2>
      <StrategyKeyMetrics />
    </div>
  );
};

export default StrategyBuilder;
