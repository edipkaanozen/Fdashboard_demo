import React from 'react';

const UpcomingExpirations = ({ upcomingExpirations }) => {
  return (
    <div className="flex overflow-hidden rounded-lg border border-[#2e556b] bg-[#0f1c24]">
      <table className="flex-1">
        <thead>
          <tr className="bg-[#172a36]">
            <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Symbol</th>
            <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Type</th>
            <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Strike</th>
            <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Expiry</th>
            <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Days Left</th>
          </tr>
        </thead>
        <tbody>
          {upcomingExpirations.map(expiration => (
            <tr key={expiration.id} className="border-t border-t-[#2e556b]">
              <td className="h-[72px] px-4 py-2 w-[400px] text-white text-sm font-normal leading-normal">{expiration.symbol}</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#8db6ce] text-sm font-normal leading-normal">{expiration.type}</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#8db6ce] text-sm font-normal leading-normal">${expiration.strike}</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#8db6ce] text-sm font-normal leading-normal">{expiration.expiry}</td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#8db6ce] text-sm font-normal leading-normal">{expiration.days_left}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingExpirations;
