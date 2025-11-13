import React, { useState } from 'react';

const BacktestResults = () => {
  const [activeTab, setActiveTab] = useState('summary');
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#0f1c24] dark group/design-root overflow-x-hidden" style={{fontFamily: 'Inter, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-white tracking-light text-[32px] font-bold leading-tight">Backtest Results</p>
            <p className="text-[#9aafbc] text-sm font-normal leading-normal">Analyze the historical performance of your trading strategy.</p>
          </div>
        </div>
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Backtest Configuration</h3>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <select
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#27333a] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#9aafbc] p-4 text-base font-normal leading-normal"
            >
              <option value="one">Strategy 1</option>
              <option value="two">Strategy 2</option>
              <option value="three">Strategy 3</option>
            </select>
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <select
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#27333a] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#9aafbc] p-4 text-base font-normal leading-normal"
            >
              <option value="one">AAPL</option>
              <option value="two">GOOG</option>
              <option value="three">MSFT</option>
            </select>
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <select
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#27333a] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#9aafbc] p-4 text-base font-normal leading-normal"
            >
              <option value="one">2023-01-01 - 2023-12-31</option>
              <option value="two">2022-01-01 - 2022-12-31</option>
              <option value="three">2021-01-01 - 2021-12-31</option>
            </select>
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <select
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#27333a] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#9aafbc] p-4 text-base font-normal leading-normal"
            >
              <option value="one">1 Day</option>
              <option value="two">1 Hour</option>
              <option value="three">15 Minutes</option>
            </select>
          </label>
        </div>
        <div className="pb-3">
          <div className="flex border-b border-[#394b56] px-4 gap-8">
            <button type="button" onClick={() => setActiveTab('summary')} className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'summary' ? 'border-b-white text-white' : 'border-b-transparent text-[#9aafbc]'} pb-[13px] pt-4`}>
              <p className={`text-sm font-bold leading-normal tracking-[0.015em]`}>Summary</p>
            </button>
            <button type="button" onClick={() => setActiveTab('charts')} className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'charts' ? 'border-b-white text-white' : 'border-b-transparent text-[#9aafbc]'} pb-[13px] pt-4`}>
              <p className={`text-sm font-bold leading-normal tracking-[0.015em]`}>Charts</p>
            </button>
            <button type="button" onClick={() => setActiveTab('trades')} className={`flex flex-col items-center justify-center border-b-[3px] ${activeTab === 'trades' ? 'border-b-white text-white' : 'border-b-transparent text-[#9aafbc]'} pb-[13px] pt-4`}>
              <p className={`text-sm font-bold leading-normal tracking-[0.015em]`}>Trades</p>
            </button>
          </div>
        </div>
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Key Metrics</h3>
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#27333a]">
            <p className="text-white text-base font-medium leading-normal">CAGR</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">15.2%</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#27333a]">
            <p className="text-white text-base font-medium leading-normal">Max Drawdown</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">-8.5%</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#27333a]">
            <p className="text-white text-base font-medium leading-normal">Sharpe Ratio</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">1.2</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#27333a]">
            <p className="text-white text-base font-medium leading-normal">Sortino Ratio</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">1.8</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#27333a]">
            <p className="text-white text-base font-medium leading-normal">Win Rate</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">62%</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#27333a]">
            <p className="text-white text-base font-medium leading-normal">Turnover</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">250%</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#27333a]">
            <p className="text-white text-base font-medium leading-normal">Trades Count</p>
            <p className="text-white tracking-light text-2xl font-bold leading-tight">125</p>
          </div>
        </div>
        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Export</h3>
        <div className="flex justify-stretch">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#27333a] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Export Trades (CSV)</span>
            </button>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#27333a] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Export Metrics (JSON)</span>
            </button>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default BacktestResults;
