import { useState } from "react";
import img1 from "../image/chain-icon/icon1.png";
import img2 from "../image/chain-icon/icon2.png";
import img3 from "../image/chain-icon/icon3.png";
import img4 from "../image/chain-icon/icon4.png";
import img5 from "../image/chain-icon/icon5.png";
import img6 from "../image/chain-icon/icon6.png";
import img7 from "../image/chain-icon/icon7.png";
import img8 from "../image/chain-icon/icon8.png";
import img9 from "../image/chain-icon/icon9.png";
import img10 from "../image/chain-icon/icon10.png";
import img11 from "../image/chain-icon/icon11.png";
import img12 from "../image/chain-icon/icon12.png";
import img13 from "../image/chain-icon/icon13.png";
import BottomSections from "../components/BottomSections";

const Createlauncpad2 = () => {
  const [showNotes, setShowNotes] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [currency, setCurrency] = useState("");
  const [feeOption, setFeeOption] = useState("");
  const [listingOption, setListingOption] = useState("");
  const [affiliateOption, setAffiliateOption] = useState("");


  const handleCurrencyChange = (item) => setCurrency(item);
  const handleListingOptionChange = (option) => setListingOption(option);

  const handleOptionSelect = (option) => setSelectedOption(option);
  const handleConnectWallet = () => alert("Connect wallet clicked!");

  return (
    <>
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-1 sm:px-10 md:px-16 lg:px-20 xl:px-28 mt-10 md:mt-5">
      {/* First Section */}
      <div className="w-full max-w-6xl flex flex-col items-center p-2 lg:p-8 border border-[#1ec600] shadow-[#1ec600] shadow-lg bg-black dark:bg-[#fafafa] text-white dark:text-black rounded-lg">
        <div className="md:py-5 py-2 w-full text-center">
          <h1 className="lg:text-3xl text-xl text-center font-k2d font-bold">Create Presale</h1>
        </div>
        <div className="w-full border-t-2 border-dashed border-[#1fc600a8] my-5"></div>
        <div className="md:py-5 py-2 w-full text-center">
          <h1 className="text-2xl text-center md:text-left font-semibold">Chain </h1>
        </div>
   <div className="w-full max-w-6xl flex flex-col gap-8">
            {/* EVM Section */}
            <div
              className={`flex flex-col gap-5 border-2 border-[#1fc6006b] p-5 sm:p-8 ${
                selectedOption === 'option1' ? 'bg-[#1ec6000b]' : ''
              }`}
              id='option1'
              onClick={() => handleOptionSelect('option1')}
            >
              <h1 className="text-lg sm:text-xl font-semibold text-[#1FC600] ">EVM</h1>
              <div className="flex items-center gap-2 flex-wrap">
                <img src={img1} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                <img src={img2} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                <img src={img3} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                <img src={img4} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                <img src={img5} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                <img src={img6} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                <img src={img7} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                <img src={img8} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                <img src={img9} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                <img src={img10} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                <img src={img11} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                <img src={img12} alt="" className="w-6 h-6 md:w-8 md:h-8" />
                <img src={img13} alt="" className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>

            {/* Solana Section */}
            <div
              className={`flex flex-col gap-5 border-2 border-[#1ec6006b] p-5 sm:p-8 ${
                selectedOption === 'option2' ? 'bg-[#1ec6000b]' : ''
              }`}
              id='option2'
              onClick={() => handleOptionSelect('option2')}
            >
              <h1 className="text-lg sm:text-xl font-semibold text-[#1FC600]">Solana</h1>
              <div className="flex items-center gap-2">
                <img src={img1} alt="" className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>                   
          </div>

      {/* Second Section */}
      <div className="w-full max-w-6xl flex flex-row items-center justify-between bg-black dark:bg-white text-white dark:text-black  flex-wrap gap-4 mt-10">
      <div className="flex flex-col gap-2 w-full lg:w-1/3">
      <h1 className="text-lg font-semibold">Token Address</h1>
      <textarea
        className="w-full border border-[#1fc6006b] p-2 rounded-lg bg-[#1ec60018]"
        placeholder="Enter token address"
        onFocus={() => setShowNotes(true)} // Show notes when textarea is clicked
        onBlur={() => setShowNotes(false)} // Optionally hide notes when focus is lost
      ></textarea>
      {showNotes && (
        <div className="mt-2">
          {/* First Note */}
          <h1 className="text-md text-[red] font-medium">
            Token address cannot be blank
          </h1>
          {/* Second Note */}
          <h1 className="text-md text-[yellow]  ">
            Creation fee: 1 BNB
          </h1>
        </div>
      )}
    </div>
        <div>
          <h1> or</h1>
        </div>

        <div className="flex flex-col gap-2 w-full lg:w-1/3">
          <button className=" border border-[#1fc600] p-2 px-3 lg:px-3 text-md bg-light-gradient dark:bg-dark-gradient  text-white dark:text-black font-semibold rounded-lg  ">
            Create Token
          </button>
        </div>
      </div>

      
      {/* Third Section */}
      <div className="w-full max-w-6xl mt-8">
        <h1 className="text-xl font-semibold mb-2">Currency</h1>
        <div className="flex flex-wrap gap-4">
          {["BNB", "BUSD", "USDT", "USDB"].map((item) => (
            <label key={item} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={item}
                className="form-checkbox h-5 w-5 text-[#1fc600]"
                onChange={() => handleCurrencyChange(item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
        {currency && (
          <p className="mt-4 text-sm text-yellow-300">
            User will pay with <strong>{currency}</strong> for your token.
          </p>
        )}
      </div>

      {/* Fourth Section */}
      <div className="w-full max-w-6xl mt-8">
        <h1 className="text-xl font-semibold mb-2">Fee Option</h1>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            value="5% BNB Raised Fee"
            className="form-checkbox h-5 w-5 text-[#1fc600]"
            onChange={() => setFeeOption("5% BNB Raised Fee")}
          />
          <span>5% BNB Raised Fee</span>
        </label>
      </div>

      {/* Fifth Section */}
      <div className="w-full max-w-6xl mt-8">
        <h1 className="text-xl font-semibold mb-2">Listing Option</h1>
        <div className="flex flex-wrap gap-4">
          {["Auto Listing", "Manual Listing"].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={option}
                className="form-checkbox h-5 w-5 text-[#1fc600]"
                onChange={() => handleListingOptionChange(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {listingOption === "Manual Listing" && (
          <p className="mt-4 text-sm text-yellow-300">
            Recommended for seed/private sale.
          </p>
        )}
      </div>

      {/* Sixth Section */}
      <div className="w-full max-w-6xl mt-8">
        <h1 className="text-xl font-semibold mb-2">Affiliate Program</h1>
        <div className="flex flex-wrap gap-4">
          {["Disable Affiliate", "Enable Affiliate"].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={option}
                className="form-checkbox h-5 w-5 text-green-600"
                onChange={() => setAffiliateOption(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Notes Section */}
      <div className="w-full max-w-6xl mt-10 border border-[#ffff0094] p-4 bg-black dark:bg-white  rounded-lg">
        <p className="text-[yellow] dark:text-[#5a0a04]  font-semibold">
          <strong>Note:</strong> For auto listing, after you finalize the pool your token will be auto listed on DEX.
        </p>
        <p className="text-[red] font-medium">
          <strong>Note:</strong> Insufficient creation fee. Need at least 1 BNB + transaction fee 0.01 BNB to create presale (AllDao won't charge the transaction fees. We just ensure you have enough transaction fees to create a presale and update the presale setting when launched). Your balance is 0 BNB.
        </p>
      </div>



      {/* Notes */}
      <div className="w-full max-w-6xl overflow-auto mt-10 border border-[#ffff0094] p-4 bg-black dark:bg-white rounded-lg">
        <p className="text-[yellow] dark:text-[#5a0a04]  font-semibold">
          <strong>Note:</strong> Please exclude AllDao Factory address 0x5851B2F388142a7584ac752e637B765Eead9bcDB from fees, rewards, max tx amount to start creating pools
        </p>

      </div>

      <div className="text-center mt-8">
          <h1 className="text-lg font-medium text-[#1fc600]">
            You need to connect your wallet first
          </h1>
          <button
            className="mt-4 border border-[#1fc600] p-2 px-3 lg:px-5 text-md bg-light-gradient dark:bg-dark-gradient  text-white rounded-lg "
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </button>
        </div>
    </div>
    </div>
    <BottomSections/>
    </>
  );
};

export default Createlauncpad2;
