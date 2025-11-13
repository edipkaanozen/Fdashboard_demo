import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000 },
  { name: 'Feb', uv: 3000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
];

const PLChart = () => {
  return (
    <div className="flex min-w-72 flex-1 flex-col gap-2">
      <p className="text-white text-base font-medium leading-normal">P/L Chart</p>
      <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">$567</p>
      <div className="flex gap-1">
        <p className="text-[#9aafbc] text-base font-normal leading-normal">Today</p>
        <p className="text-[#fa5f38] text-base font-medium leading-normal">-1.2%</p>
      </div>
      <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
        <ResponsiveContainer width="100%" height={148}>
          <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0066ff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#0066ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tick={{fill: '#9aafbc'}} axisLine={false} tickLine={false} />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#0066ff" fillOpacity={1} fill="url(#colorUv)" strokeWidth={3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PLChart;
