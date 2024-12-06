// import React from "react";
import { useNavigate } from "react-router-dom";
import BottomSections from "../components/BottomSections";

const Airdrop3 = () => {
  const navigate = useNavigate();

  // Token data array
  const tokenData = [
    { name: "blitxcoin", symbol: "blitx", decimal: 18 },
  ];

  return (
   <>
    <div className="min-h-screen p-1 sm:px-10 md:px-16 lg:px-20 xl:px-28 mt-10 md:mt-5">
      {/* Main Container */}
      <div className="flex flex-col items-center max-w-screen-xl bg-black dark:bg-white text-white dark:text-black sm:p-10 rounded-lg mx-auto dark:border-2 border-green-500 shadow-md shadow-green-500">
        {/* Header */}
        <div className="w-full text-center border-b-2 border-dashed border-[#1fc600a8] border-opacity-25 mb-6">
          <h1 className="lg:text-3xl text-xl font-bold font-k2d text-center py-3 text-[#1fc600]">
            Create Airdrop
          </h1>
        </div>

        {/* Content */}
        <div className="w-full p-6 rounded-lg">
          {/* Token Address Input */}
          <h1 className="text-lg font-semibold mb-4">
            Token Address
          </h1>
          <input
            type="text"
            placeholder="Enter Token Address"
            className="w-full border bg-black dark:bg-white text-white dark:text-black border-[#1fc600a8] rounded-xl p-3 mb-6 focus:outline-none focus:ring-4 focus:ring-green-800"
          />

          {/* Token Info */}
          <div className="w-full  p-4 rounded-lg text-white dark:text-black mb-6">
            {tokenData.map((token, index) => (
              <div
                key={index}
                className="flex justify-between w-full mb-2 text-sm sm:text-lg"
              >
                <span className="font-semibold">Name:</span>
                <span className="font-semibold">{token.name}</span>
              </div>
            ))}
            {tokenData.map((token, index) => (
              <div
                key={index}
                className="flex justify-between w-full mb-2 text-sm sm:text-lg"
              >
                <span className="font-semibold">Symbol:</span>
                <span className="font-semibold">{token.symbol}</span>
              </div>
            ))}
            {tokenData.map((token, index) => (
              <div
                key={index}
                className="flex justify-between w-full mb-2 text-sm sm:text-lg"
              >
                <span className="font-semibold">Decimal:</span>
                <span className="font-semibold">{token.decimal}</span>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <div className="w-full flex justify-center">
            <button
              onClick={() => navigate("/Airdrop4")}
              className="text-md font-semibold font-quicksand border border-[#1fc600] p-2 px-3 lg:px-5 rounded bg-gradient-to-r from-[#000000] via-[#1fc600] to-[#000000] hover:from-[#000000] hover:via-[#22dd01] hover:to-[#000000] dark:bg-gradient-to-r dark:from-[#1fc600] dark:via-[#ffffff] dark:to-[#1fc600]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    <BottomSections/>
   </>
  );
};

export default Airdrop3;
