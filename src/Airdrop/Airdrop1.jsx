// import React from "react";
import { useNavigate } from "react-router-dom";
import BottomSections from "../components/BottomSections";

const Airdrop1 = () => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/Airdrop2"); // Replace "/next-page" with your desired route
  };

  return (
    <>
    <div className=" flex items-center justify-center p-1 sm:px-10 md:px-16 lg:px-20 xl:px-28 mt-10 md:mt-5 ">
      <div className="w-full max-w-screen-md bg-black dark:bg-white text-white dark:text-black p-6 rounded-xl shadow-lg border-2 border-green-500">
        {/* Header */}
        <div className="w-full  text-center md:text-left border-b-2 border-dashed border-[#1fc600a8] border-opacity-50 pb-4 mb-6">
          <h1 className="text-xl md:text-3xl font-bold font-k2d text-center">
            Create Airdrop
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-6 ">
          <h1 className="text-lg md:text-xl font-semibold">Token Address</h1>
          <input
            type="text"
            placeholder="Enter Token Address"
            className="w-full p-3 bg-black dark:bg-white text-white dark:text-black rounded-lg border border-[#1fc600a8] focus:outline-none"
          />
          <div className="flex justify-center">
            <button
              onClick={handleNextClick}
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

export default Airdrop1;
