// import React from "react";

import BottomSections from "../components/BottomSections";

const TokenLockInfo = () => {
  const tokenInfo = {
    tokenAddress: "0xA99600043E84181A94d1f9138674",
    tokenName: "FX Stock Token",
    tokenSymbol: "FXST",
    tokenDecimals: 6,
  };

  const lockInfo = {
    title: "Fxst Marketing Lock",
    totalAmountLocked: "20,000,000 FX Stock Token",
    totalValuesLocked: "$0",
    owner: "0x141704Db098156009fE262fE0791e5",
    lockDate: "2024.11.02 08:53 UTC",
    unlockDate: "2025.11.02 00:00 UTC (in 11 months)",
    unlockedAmount: "0 FX Stock Token",
  };

  return (
    <>
      <div className="w-full overflow-x-hidden overflow-hidden p-1 sm:px-10 md:px-16 lg:px-20 xl:px-28 mt-10 md:mt-5 ">
        <div className="w-full md:w-full  p-5 sm:py-10 lg:py-10 ">
          {/* Token Info */}
          <div className="bg-black dark:bg-white text-white dark:text-black shadow-md border border-[#1fc6006b] rounded-lg p-6">
            <h2 className="text-xl md:text-3xl text-center font-bold font-k2d">Token Info</h2>
            <div className="space-y-3 ">
              <div className="flex flex-col md:flex-row py-1 border-b-2 border-[#1fc6006b] border-dashed justify-center md:justify-between items-center">
                <span className="font-semibold ">Token Address</span>
                <span className="text-[#1fc600] hover:underline cursor-pointer">
                  {tokenInfo.tokenAddress}
                </span>
              </div>
              <div className="flex flex-col md:flex-row py-1 border-b-2 border-[#1fc6006b] border-dashed justify-center md:justify-between items-center">
                <span className="font-semibold ">Token Name</span>
                <span>{tokenInfo.tokenName}</span>
              </div>
              <div className="flex flex-col md:flex-row py-1 border-b-2 border-[#1fc6006b] border-dashed justify-center md:justify-between items-center">
                <span className="font-semibold ">Token Symbol</span>
                <span>{tokenInfo.tokenSymbol}</span>
              </div>
              <div className="flex flex-col md:flex-row py-1 border-b-2 border-[#1fc6006b] border-dashed justify-center md:justify-between items-center">
                <span className="font-semibold ">Token Decimals</span>
                <span>{tokenInfo.tokenDecimals}</span>
              </div>
            </div>
          </div>

          {/* Lock Info */}
          <div className="mt-5 bg-[#1d1d1d] shadow-md border border-[#1fc6006b] rounded-lg p-6">
            <h2 className="text-xl md:text-3xl text-center font-bold font-k2d">Lock Info</h2>
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row py-1 border-b-2 border-[#1fc6006b] border-dashed justify-center md:justify-between items-center">
                <span className="font-semibold ">Title</span>
                <span>{lockInfo.title}</span>
              </div>
              <div className="flex flex-col md:flex-row py-1 border-b-2 border-[#1fc6006b] border-dashed justify-center md:justify-between items-center">
                <span className="font-semibold ">
                  Total Amount Locked
                </span>
                <span>{lockInfo.totalAmountLocked}</span>
              </div>
              <div className="flex flex-col md:flex-row py-1 border-b-2 border-[#1fc6006b] border-dashed justify-center md:justify-between items-center">
                <span className="font-semibold ">
                  Total Values Locked
                </span>
                <span>{lockInfo.totalValuesLocked}</span>
              </div>
              <div className="flex flex-col md:flex-row py-1 border-b-2 border-[#1fc6006b] border-dashed justify-center md:justify-between items-center">
                <span className="font-semibold ">Owner</span>
                <span className="text-[#1fc600] hover:underline cursor-pointer">
                  {lockInfo.owner}
                </span>
              </div>
              <div className="flex flex-col md:flex-row py-1 border-b-2 border-[#1fc6006b] border-dashed justify-center md:justify-between items-center">
                <span className="font-semibold ">Lock Date</span>
                <span>{lockInfo.lockDate}</span>
              </div>
              <div className="flex flex-col md:flex-row py-1 border-b-2 border-[#1fc6006b] border-dashed justify-center md:justify-between items-center">
                <span className="font-semibold ">Unlock Date</span>
                <span>{lockInfo.unlockDate}</span>
              </div>
              <div className="flex flex-col md:flex-row py-1 border-b-2 border-[#1fc6006b] border-dashed justify-center md:justify-between items-center">
                <span className="font-semibold ">
                  Unlocked Amount
                </span>
                <span>{lockInfo.unlockedAmount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomSections/>
    </>
  );
};

export default TokenLockInfo;

// import BottomSections from "../components/BottomSections";

// const TokenInfo = () => {
//   return (
//     <>
//       <div className="w-full md:ml-[2%] md:mr-[2%]  p-1 mt-10 overflow-x-hidden overflow-hidden sm:p-10 lg:p-16  ">
//         <div className="w-full md:w-full bg-[#1d1d1d] p-5 sm:py-10 lg:py-10 border border-[#1ec60058] rounded-lg">
//           <div className="py-5 w-full max-w-6xl ">
//             <h1 className="text-xl md:text-3xl text-center font-bold font-k2d">
//               Token Info
//             </h1>
//           </div>
//           <div className=" py-5 px-5 shadow-lg font-quicksand text-md  ">
//             <div className="flex justify-between items-center border-b-2 border-[#1fc60068] p-2 border-dashed">
//               <div className="font-semibold">Token Address</div>
//               <div className="">f564gr23t3y8rt451g2f5r4ey24157g5er</div>
//             </div>
//             <div className="flex justify-between items-center border-b-2 border-[#1fc60068] p-2 border-dashed">
//               <div className="font-semibold">Token Name</div>
//               <div className="">12345678901234567890</div>
//             </div>
//             <div className="flex justify-between items-center border-b-2 border-[#1fc60068] p-2 border-dashed">
//               <div className="font-semibold">Token Symbol</div>
//               <div className="">12345678901234567890</div>
//             </div>
//             <div className="flex justify-between items-center border-b-2 border-[#1fc60068] p-2 border-dashed">
//               <div className="font-semibold">Token Address</div>
//               <div className="">12345678901234567890</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <BottomSections />
//     </>
//   );
// };
// export default TokenInfo;
