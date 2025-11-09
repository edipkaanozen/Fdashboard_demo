import React from 'react';

const RecentTrades = ({ trades }) => {
  return (
    <div className="flex overflow-hidden rounded-lg border border-[#2e556b] bg-[#0f1c24]">
      <table className="flex-1">
        <thead>
          <tr className="bg-[#172a36]">
            <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Symbol</th>
            <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Type</th>
            <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Entry</th>
            <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Exit</th>
            <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">P/L</th>
          </tr>
        </thead>
        <tbody>
          {trades.map(trade => (
            <tr key={trade.id} className="border-t border-t-[#2e556b]">
              <td className="h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">{trade.symbol}</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#8db6ce] text-sm font-normal leading-normal">{trade.type}</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#8db6ce] text-sm font-normal leading-normal">${trade.entry}</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#8db6ce] text-sm font-normal leading-normal">${trade.exit}</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#8db6ce] text-sm font-normal leading-normal">{trade.p_l > 0 ? `+$${trade.p_l}` : `-$${Math.abs(trade.p_l)}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTrades;
