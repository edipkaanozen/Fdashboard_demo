import React from 'react';

const KeyMetrics = ({ keyMetrics }) => {
  if (!keyMetrics) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">Key Metrics</h2>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg">
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">P/L</p>
              <p className="text-[#8db6ce] text-sm font-normal leading-normal">Unrealized: ${keyMetrics.p_l_unrealized} Realized: ${keyMetrics.p_l_realized}</p>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#203b4b] text-white text-sm font-medium leading-normal w-fit"
            >
              <span className="truncate">View Details</span>
            </button>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBx8nNuPr_UI1_hBuepMErriB-C761MW6cRPQc8GLSH1xgJpJWKvmuXplR-oWcs4pTj43_gH4kC_l8qCVx52w-O8WS78nXURjkLekwzA-HccFX2BH2LCUSbMAWfw3OsktKnzPWCG-Ati4aw_zwU6EhfIPoRnhsCGN8qXLfmp3GJED3lDJzLDtZodmSlTk5RO0ARo6qOmqpYCckWWUD_t4W4ZmmEbReUGuywR4j4uOqXd6tWnIpWKxT3a2wjy3J_SFdMKUwLuymuRgY")'}}
          ></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg">
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">Win Rate</p>
              <p className="text-[#8db6ce] text-sm font-normal leading-normal">{keyMetrics.win_rate}%</p>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#203b4b] text-white text-sm font-medium leading-normal w-fit"
            >
              <span className="truncate">Analyze Trades</span>
            </button>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCSR2Exbg0BfDjrtHc5mdrKt1HWuueTXTln6fkFCXTJUfVqvAVbLHSdqcYB66BVaSNx-V4Ul_Qzn9ut0Vta_1j-qBeCQSPDO5qTK952KAwakMxTQNS3CyN-wYJ5BsmM1PFdHe9FbgE-pBuk6O-vs_tbpD5f8cvvAP7VAqA--4zzktq056UkYJabCG6771cxtcJ9z9ZF3ri5FNitXzP6E9akzZv_dks2A6iqkUqvHPWud5oeljg64ZdXLpvbZNPpvRnZTcvyAKhb6M")'}}
          ></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg">
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">Risk/Reward</p>
              <p className="text-[#8db6ce] text-sm font-normal leading-normal">{keyMetrics.risk_reward_ratio}</p>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#203b4b] text-white text-sm font-medium leading-normal w-fit"
            >
              <span className="truncate">Adjust Strategy</span>
            </button>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_2tw7RRJzOymcn82ZjFW_8vkO_nS_zXb6GRP8327-ykzeTVu9H0WFRTF1-IaWupuMuV_50e_siBcm_1Solwa-MVSmPUqGyk9VE8UrbVtQGYcoTcaQ6bKfI5wAZETt1V5LDcsh1X7oVUp3kSQ_GUlLkRYBiCQkIPd9UYhKXrzgZFTweP6BVBqcoEfVXJ99VNX9KkxALvavahXRYhcGuZmzgtEZ7DwnJYrODUKJRC8l9-RYNWAkbJz6EwbJjvyacDqFlfM7EBrRhJw")'}}
          ></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg">
          <div className="flex flex-[2_2_0px] flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-bold leading-tight">R-Multiples</p>
              <p className="text-[#8db6ce] text-sm font-normal leading-normal">{keyMetrics.r_multiples}x</p>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#203b4b] text-white text-sm font-medium leading-normal w-fit"
            >
              <span className="truncate">Review Performance</span>
            </button>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDeqa7qGmHUnVcYaQ6yo-YsUDEocNC9Tg8VI8a2dLhqXshUJMiu8ZoA7Th_m4VMDuUQrj13h5r95QjS2O46ACUYfI1eUsQYDGyDU9CFQIVafbxzy1ECfLkTGhGvKJTH61XWBjETP9DFRufBaIwa5DbVkXwmT6NpCFvJgOxOhhT_ZgV-o296BdxW7Gbcmv1OKSTf5sSWN2leWXxdeHGH7aM_2euWhexX4hSwQ7XDJ-Dm5fCT4gLS26Hf91Z8AlgPYeuz34v8okBVkn8")'}}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default KeyMetrics;
