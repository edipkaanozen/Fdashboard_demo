import React, { useState } from 'react';

const initialLegs = [
  { side: 'Buy', quantity: 1, type: 'Call', strike: 120, expiry: '2024-12-31' },
  { side: 'Sell', quantity: 1, type: 'Put', strike: 110, expiry: '2024-12-31' },
];

const LegControls = () => {
  const [legs, setLegs] = useState(initialLegs);

  const addLeg = () => {
    const newLeg = { side: 'Buy', quantity: 1, type: 'Call', strike: 125, expiry: '2024-12-31' };
    setLegs([...legs, newLeg]);
  };

  const removeLeg = () => {
    if (legs.length > 0) {
      setLegs(legs.slice(0, -1));
    }
  };

  return (
    <>
      <div className="px-4 py-3 @container">
        <div className="flex overflow-hidden rounded-lg border border-[#394b56] bg-[#101518]">
          <table className="flex-1">
            <thead>
              <tr className="bg-[#1b2328]">
                <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Side</th>
                <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Quantity</th>
                <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Call/Put</th>
                <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Strike</th>
                <th className="px-4 py-3 text-left text-white w-[400px] text-sm font-medium leading-normal">Expiry</th>
              </tr>
            </thead>
            <tbody>
              {legs.map((leg, index) => (
                <tr key={index} className="border-t border-t-[#394b56]">
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#9aafbc] text-sm font-normal leading-normal">{leg.side}</td>
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#9aafbc] text-sm font-normal leading-normal">{leg.quantity}</td>
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#9aafbc] text-sm font-normal leading-normal">{leg.type}</td>
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#9aafbc] text-sm font-normal leading-normal">{leg.strike}</td>
                  <td className="h-[72px] px-4 py-2 w-[400px] text-[#9aafbc] text-sm font-normal leading-normal">{leg.expiry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-stretch">
        <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
          <button onClick={addLeg} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#00a2ff] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Add Leg</span>
          </button>
          <button onClick={removeLeg} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#27333a] text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Remove Leg</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default LegControls;
