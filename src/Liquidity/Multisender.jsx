// import React from "react";
import BottomSections from "../components/BottomSections";

const Multisender = () => {
    // const handleConnectWallet = () => {
    //     if (selectedOption) {
    //       // Navigate to the new page
    //       console.log('Navigating to CreatePage2');
    //     } else {
    //       alert('Please select an option first!');
    //     }
    //   };
  return (
 <>
    <div className="w-full flex flex-col items-center p-1 sm:px-10 md:px-16 lg:px-20 xl:px-28 mt-10 md:mt-5">
      <div className="w-full lg:w-[80%] flex flex-col items-center bg-black dark:bg-white text-white dark:text-black dark:text-black dark:bg-white text-white dark:text-black dark:text-black  p-6 sm:p-8 lg:p-10 border border-[#1ec6006b] rounded-lg">
        {/* Header Section */}
        <div className="border-b-2 border-[#1ec6006b] border-dashed w-full text-center  ">
          <h1 className="text-xl md:text-3xl font-bold font-k2d">MultiSender</h1>
        </div>

        {/* Step 1 Section */}
        <div className="flex flex-col md:flex-row w-full gap-6 my-6">
          <div className="border border-[#1ec600a8] bg-black dark:bg-white text-white dark:text-black dark:text-black  flex flex-col p-4 rounded-lg flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#1ec6009f] rounded-full text-white dark:text-black text-center font-bold w-10 h-10 flex items-center justify-center">
                1
              </div>
              <h2 className="text-lg font-semibold">Add Your Allocation</h2>
            </div>
            <p className="text-sm text-gray-300 dark:text-black">
              Enter your token to be sent with allocations.
            </p>
          </div>
        </div>

        {/* Token Address Input Section */}
        <div className="flex flex-col lg:flex-row justify-between w-full gap-6 mb-6">
          <div className="flex flex-col w-full lg:w-[60%]">
            <h1 className="text-lg font-semibold mb-2">Token Address</h1>
            <input
              type="text"
              className="w-full bg-black dark:bg-white text-white dark:text-black dark:text-black text-white dark:text-black border border-[#1ec600a8] p-3 rounded-lg focus:outline-none"
              placeholder="Enter token address"
            />
          </div>
          <div className="border border-[#1ec600a8] bg-black dark:bg-white text-white dark:text-black dark:text-black text-white dark:text-black flex flex-col p-4 rounded-lg flex-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#1fc6009f] rounded-full text-white dark:text-black text-center font-bold w-10 h-10 flex items-center justify-center">
                2
              </div>
              <h2 className="text-lg font-semibold">Confirmation</h2>
            </div>
            <p className="text-sm text-gray-300 dark:text-black">
              Let’s review your information.
            </p>
          </div>
        </div>

        {/* Information Section */}
        <p className="text-sm text-white dark:text-black mb-6">
          AllDao Multi-Sender allows you to send ERC20 tokens in batch by the
          easiest way. You can enter a token address to send a specific token or
          leave it blank to send chain tokens such as BNB...
        </p>

        {/* Allocation Section */}
        <div className="w-full mb-6">
          <h1 className="text-lg font-semibold mb-2">Allocation</h1>
          <textarea
            name="allocation"
            className="w-full bg-black dark:bg-white text-white dark:text-black dark:text-black text-white dark:text-black border border-[#1ec600a8] p-3 rounded-lg h-32 focus:outline-none"
            placeholder="Enter allocation details"
          ></textarea>
        </div>

        {/* Recipients Section */}
        <div className="w-full mb-6 flex flex-col ">
          <h1 className="text-lg font-semibold text-[#1fc600] mb-2">
            Recipients allocation is required
          </h1>
          <div className="flex flex-row"> 
          <div className="flex flex-row w-full justify-between md:gap-20 gap-5 items-center ">
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-[#1ec6003a] text-white dark:text-black font-medium font-quicksand border border-[#1ec600a8] text-sm md:text-lg p-1 md:p-3 rounded-lg text-center"
            >
              Click to upload file (CSV or PDF)
            </label>
            <input
              type="file"
              id="file-upload"
              accept=".csv, .pdf"
              className="hidden"
            />
            <div className="text-[#1fc600] text-sm md:text-lg font-medium font-quicksand"> Sample Csv File</div>
          </div>

        </div>
        </div>
        <div
        id="div2"
        className="flex flex-col items-center justify-center w-full   text-center rounded-lg shadow-lg"
      >

        <button
          id="connectwallet"
          className="text-md font-semibold border border-[#1fc600] p-2 px-3 lg:px-5 rounded bg-gradient-to-r from-[#000000] via-[#1fc600] to-[#000000] hover:via-[#22dd01]"
          // onClick={handleConnectWallet}
           > Next
        </button>
      </div>
      </div>
    </div>

    <BottomSections/>
 </>
  );
};

export default Multisender;
