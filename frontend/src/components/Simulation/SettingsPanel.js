import React from 'react';

const SettingsPanel = ({ settings, onChange }) => {
  return (
    <div className="layout-content-container flex flex-col w-80">
      <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">Simulation</h2>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Search Symbol"
            name="symbol"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#27333a] focus:border-none h-14 placeholder:text-[#9aafbc] p-4 text-base font-normal leading-normal"
            value={settings.symbol}
            onChange={onChange}
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <div className="flex w-full flex-1 items-stretch rounded-lg">
            <input
              placeholder="Date Range"
              name="dateRange"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#27333a] focus:border-none h-14 placeholder:text-[#9aafbc] p-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
              value={settings.dateRange}
              onChange={onChange}
            />
            <div
              className="text-[#9aafbc] flex border-none bg-[#27333a] items-center justify-center pr-4 rounded-r-lg border-l-0"
              data-icon="Calendar"
              data-size="24px"
              data-weight="regular"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"
                ></path>
              </svg>
            </div>
          </div>
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-white text-base font-medium leading-normal pb-2">Bar Frequency</p>
          <select
            name="barFrequency"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#27333a] focus:border-none h-14 bg-[image:--select-button-svg] placeholder:text-[#9aafbc] p-4 text-base font-normal leading-normal"
            value={settings.barFrequency}
            onChange={onChange}
          >
            <option value="daily">Daily</option>
            <option value="hourly">Hourly</option>
            <option value="weekly">Weekly</option>
          </select>
        </label>
      </div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Parameter Configuration</h2>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-white text-base font-medium leading-normal pb-2">Transaction Costs</p>
          <input
            name="transactionCosts"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#27333a] focus:border-none h-14 placeholder:text-[#9aafbc] p-4 text-base font-normal leading-normal"
            value={settings.transactionCosts}
            onChange={onChange}
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-white text-base font-medium leading-normal pb-2">Slippage</p>
          <input
            name="slippage"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#27333a] focus:border-none h-14 placeholder:text-[#9aafbc] p-4 text-base font-normal leading-normal"
            value={settings.slippage}
            onChange={onChange}
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-white text-base font-medium leading-normal pb-2">Leverage</p>
          <input
            name="leverage"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#27333a] focus:border-none h-14 placeholder:text-[#9aafbc] p-4 text-base font-normal leading-normal"
            value={settings.leverage}
            onChange={onChange}
          />
        </label>
      </div>
    </div>
  );
};

export default SettingsPanel;
