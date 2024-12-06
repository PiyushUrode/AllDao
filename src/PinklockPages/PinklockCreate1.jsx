import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import img1 from  "../assets/Binance_Logo.png"
import img2 from  "../assets/ethereum.png"
import img3 from  "../assets/solana.png"
import img4 from  "../assets/arbitrum.png"
import img5 from  "../assets/polygon.png"
import img6 from  "../assets/avalanche.png"
import img7 from  "../assets/fantom-opera.png"
import img8 from  "../assets/cronos-.png"
import img9 from  "../assets/alvey-chain.webp"
import img10 from "../assets/bitrock.png"
import img11 from "../assets/core.png"
import img12 from "../assets/dogechain.png"
import img13 from "../assets/pulsechain.png"
import BottomSections from "../components/BottomSections";
// ... Other imports

const PinklockCreate1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleConnectWallet = () => {
    if (selectedOption) {
      // Navigate to the new page
      navigate("/ConnectWallet");
    } else {
      alert("Please select an option first!");
    }
  };

  return (
    <>
      <div className="pt-5 az:pt-0 md:pt-5 bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] w-full flex flex-col items-center overflow-x-hidden overflow-hidden p-1 sm:px-10 md:px-16 lg:px-20 xl:px-28 ">
        <div className="w-full md:w-full bg-[#1d1d1d]    dark:bg-[#fafafa] dark:border dark:border-green-400 shadow-sm shadow-green-500  flex flex-col items-center p-5 sm:py-10 lg:py-10 ">
          <div className="py-5 w-full max-w-6xl ">
            <h1 className="text-xl md:text-3xl text-center font-bold font-k2d">
              Create Your Lock  
            </h1>
          </div>
          <div className=" w-full py-0  opacity-15"></div>
          <div className="w-full max-w-6xl flex flex-col gap-8">
            {/* EVM Section */}
            <div
              className={`flex flex-col gap-5 border border-[#1ec600c7] dark:bg-[#fafafa] dark:border-2 shadow-inner  shadow-[#1ec600c7] p-5 sm:p-8 ${
                selectedOption === "option1" ? "bg-[#1ec6000b] dark:border" : ""
              }`}
              id="option1"
              onClick={() => handleOptionSelect("option1")}
            >
              <h1 className="text-lg sm:text-xl font-semibold text-[#1FC600] dark:text-black">
                EVM
              </h1>
              <div className="flex items-center gap-2 flex-wrap">
                <img src={img1} alt=""  className=" w-6 h-6 lg:w-8 lg:h-8 border-2 border-green-500  shadow-inner    shadow-white p-1 rounded-xl" />
                <img src={img2} alt=""  className=" w-6 h-6 lg:w-8 lg:h-8 border-2 border-green-500  shadow-inner    shadow-white p-1 rounded-xl" />
                <img src={img3} alt=""  className=" w-6 h-6 lg:w-8 lg:h-8 border-2 border-green-500  shadow-inner    shadow-white p-1 rounded-xl" />
                <img src={img4} alt=""  className=" w-6 h-6 lg:w-8 lg:h-8 border-2 border-green-500  shadow-inner    shadow-white p-1 rounded-xl" />
                <img src={img5} alt=""  className=" w-6 h-6 lg:w-8 lg:h-8 border-2 border-green-500  shadow-inner    shadow-white p-1 rounded-xl" />
                <img src={img6} alt=""  className=" w-6 h-6 lg:w-8 lg:h-8 border-2 border-green-500  shadow-inner    shadow-white p-1 rounded-xl" />
                <img src={img7} alt=""  className=" w-6 h-6 lg:w-8 lg:h-8 border-2 border-green-500  shadow-inner    shadow-white p-1 rounded-xl" />
                <img src={img8} alt=""  className=" w-6 h-6 lg:w-8 lg:h-8 border-2 border-green-500  shadow-inner    shadow-white p-1 rounded-xl" />
                <img src={img9} alt=""  className=" w-6 h-6 lg:w-8 lg:h-8 border-2 border-green-500  shadow-inner    shadow-white p-1 rounded-xl" />
                <img src={img10} alt="" className=" w-6 h-6 lg:w-8 lg:h-8 border-2 border-green-500  shadow-inner    shadow-white p-1 rounded-xl" />
                <img src={img11} alt="" className=" w-6 h-6 lg:w-8 lg:h-8 border-2 border-green-500  shadow-inner    shadow-white p-1 rounded-xl" />
                <img src={img12} alt="" className=" w-6 h-6 lg:w-8 lg:h-8 border-2 border-green-500  shadow-inner    shadow-white p-1 rounded-xl" />
                <img src={img13} alt="" className=" w-6 h-6 lg:w-8 lg:h-8 border-2 border-green-500  shadow-inner    shadow-white p-1 rounded-xl" />
              </div>
            </div>

            {/* Solana Section */}
            <div
              className={`flex flex-col gap-5 border border-[#1ec600c7] dark:bg-[#fafafa] dark:border-2 shadow-inner  shadow-[#1ec600c7] p-5 sm:p-8 ${
                selectedOption === "option2" ? "bg-[#1ec6000b] dark:border" : ""
              }`}
              id="option2"
              onClick={() => handleOptionSelect("option2")}
            >
              <h1 className="text-lg sm:text-xl font-semibold text-[#1FC600] dark:text-black">
                Solana
              </h1>
              <div className="flex items-center gap-2">
                <img src={img1} alt="" className=" w-6 h-6 lg:w-8 lg:h-8" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-4 mt-8">
            <h1 className="text-base sm:text-lg font-medium text-[#1FC600]">
              You need to connect your wallet first
            </h1>
            <button
              id="connectwallet"
              className="text-md font-semibold font-quicksand border border-[#1fc600] p-2 px-3 lg:px-5 rounded bg-gradient-to-r from-[#000000] via-[#1fc600] to-[#000000] hover:from-[#000000] hover:via-[#22dd01] hover:to-[#000000] dark:bg-gradient-to-r dark:from-[#1fc600] dark:via-[#ffffff] dark:to-[#1fc600] "
              onClick={handleConnectWallet}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
      <BottomSections />
    </>
  );
};

export default PinklockCreate1;
