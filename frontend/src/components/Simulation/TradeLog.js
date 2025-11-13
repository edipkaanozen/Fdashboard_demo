import React from 'react';

const TradeLog = ({ trades, tradeFilter, setTradeFilter }) => {
  return (
    <div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Trade Log</h2>
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        <div onClick={() => setTradeFilter('All')} className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg ${tradeFilter === 'All' ? 'bg-blue-500' : 'bg-[#27333a]'} pl-4 pr-4 cursor-pointer`}>
          <p className="text-white text-sm font-medium leading-normal">All</p>
        </div>
        <div onClick={() => setTradeFilter('Entry')} className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg ${tradeFilter === 'Entry' ? 'bg-blue-500' : 'bg-[#27333a]'} pl-4 pr-4 cursor-pointer`}>
          <p className="text-white text-sm font-medium leading-normal">Entries</p>
        </div>
        <div onClick={() => setTradeFilter('Exit')} className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg ${tradeFilter === 'Exit' ? 'bg-blue-500' : 'bg-[#27333a]'} pl-4 pr-4 cursor-pointer`}>
          <p className="text-white text-sm font-medium leading-normal">Exits</p>
        </div>
      </div>
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-lg border border-[#394b56] bg-[#101518]">
          <table className="flex-1">
            <thead>
              <tr className="bg-[#1b2328]">
                <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Date</th>
                <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Type</th>
                <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Symbol</th>
                <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Quantity</th>
                <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Price</th>
                <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">P/L</th>
                <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">MAE/MFE</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade, index) => (
                <tr key={index} className="border-t border-t-[#394b56]">
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#9aafbc] text-sm font-normal leading-normal">{trade.date}</td>
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#9aafbc] text-sm font-normal leading-normal">{trade.type}</td>
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#9aafbc] text-sm font-normal leading-normal">{trade.symbol}</td>
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#9aafbc] text-sm font-normal leading-normal">{trade.quantity}</td>
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#9aafbc] text-sm font-normal leading-normal">{trade.price}</td>
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#9aafbc] text-sm font-normal leading-normal">{trade.pl}</td>
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#9aafbc] text-sm font-normal leading-normal">{trade.mae_mfe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TradeLog;
