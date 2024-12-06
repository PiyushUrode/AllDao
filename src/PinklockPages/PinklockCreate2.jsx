import { useState } from "react";
import img1 from  "../assets/Binance_Logo.png"
import img2 from  "../assets/ethereum.png"
import img3 from  "../assets/solana.png"
import img4 from  "../assets/arbitrum.png"
import img5 from  "../assets/polygon.png"
import img6 from  "../assets/avalanche.png"
import img7 from  "../assets/fantom-opera.png"
import img8 from  "../assets/cronos-.png"

import img14 from "../image/page3/audit1.png";
import img15 from "../image/page3/audit2.png";
import img16 from "../image/page3/audit3.png";
import img17 from "../image/page3/audit4.png";
import img18 from "../image/page3/audit5.png";
import BottomSections from "../components/BottomSections";

const PinklockCreate2 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    amount: "",
    unlockDate: "",
  });

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, title, amount, unlockDate } = formData;

    if (name && amount && unlockDate) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
    } else {
      alert("Please fill in all required fields!");
    }
  };

  const [Vesting, setVesting] = useState("");

  return (
    <>
      <div className="pt-5 az:pt-0 md:pt-5 bg-[#000000] dark:bg-[#ffffff] text-[#ffffff] dark:text-[#000000] w-full flex flex-col items-center p-1 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        <div className="w-full lg:w-[85%] flex flex-col items-center p-10 bg-[#1d1d1d] dark:bg-[#fafafa] dark:border-2 border border-[#1ec600] rounded-lg">
          <h1 className="md:text-2xl text-xl font-bold font-k2d">
            Create Your Lock
          </h1>
          <div className="border-b-2 w-full py-0 border-[#1ec60058] border-dashed my-4"></div>
          <h1 className="text-xl font-bold font-quicksand mt-5">Chain</h1>

          {/* Option 1: EVM */}
          <div
            className={`flex flex-col gap-5 w-full border border-[#1ec600c7] p-5 sm:p-8 ${
              selectedOption === "EVM" ? "bg-[#1ec6000b]" : ""
            }`}
            onClick={() => handleOptionSelect("EVM")}
          >
            <h1 className="text-lg sm:text-xl font-semibold text-[#1FC600]">
              EVM
            </h1>
            <div className="flex items-center gap-2  flex-wrap">
              {[img1, img2, img3, img4, img5, img6, img7, img8].map(
                (img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`icon-${idx}`}
                    className="w-6 h-6 lg:w-8 lg:h-8"
                  />
                )
              )}
            </div>
          </div>

          {/* Option 2: Solana */}
          <div
            className={`flex flex-col gap-5 mt-2 w-full border border-[#1ec600c7] p-5 sm:p-8 ${
              selectedOption === "Solana" ? "bg-[#1ec6000b]" : ""
            }`}
            onClick={() => handleOptionSelect("Solana")}
          >
            <h1 className="text-lg sm:text-xl font-semibold text-[#1FC600]">
              Solana
            </h1>
            <div className="flex items-center gap-2">
              <img
                src={img3}
                alt="Solana icon"
                className="w-6 h-6 lg:w-8 lg:h-8"
              />
            </div>
          </div>

          {/* Images Row */}
          <div className="flex w-full gap-5 bg-[#212121fb] flex-wrap justify-between mt-5 px-5">
            {[img14, img15, img16, img17, img18].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`audit-${idx}`}
                className="w-20 h-12 object-contain"
              />
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col sm:flex-row flex-wrap justify-between px-0 py-2 mt-5"
          >
            {["name", "title", "amount"].map((field) => (
              <div key={field} className="mb-4 w-full md:w-[48%] py-2">
                <label
                  htmlFor={field}
                  className="block text-white dark:text-black dark:text-black font-bold mb-2"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={formData[field]}
                  placeholder={`Enter ${field}...`}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#1ec60007] text-white dark:text-black border border-[#1fc60068] focus:outline-none focus:ring-2 focus:ring-[#1fc60068]"
                  required={field !== "title"}
                />
              </div>
            ))}

            {/* Unlock Date */}
            <div className="mb-4 w-full md:w-[48%] py-2">
              <label
                htmlFor="unlockDate"
                className="block text-white dark:text-black font-bold mb-2"
              >
                Unlock Date:
              </label>
              <input
                type="date"
                id="unlockDate"
                name="unlockDate"
                value={formData.unlockDate}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[#1ec6000b] text-white dark:text-black border border-[#1fc60068] focus:outline-none focus:ring-2 focus:ring-[#1fc60068]"
                required
              />
            </div>

            {/* vesting option */}
            <div className="w-full">
              <div className="">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value=""
                    className="form-checkbox h-5 w-5 text-[#1fc600]"
                  />
                  <span> Use Vesting</span>
                </label>
              </div>
              <div className="">
                <div className="flex  flex-col md:flex-row justify-between items-center mt-5">
                  <div className="mb-4 w-full md:w-[48%]">
                    <label
                      htmlFor="unlockDate"
                      className="block text-white dark:text-black font-bold mb-2"
                    > 
                      TGE Date: (UTC)
                    </label>
                    <input
                      type="date"
                      name="date"
                      placeholder="Select date"
                      className="w-full px-3 py-2 bg-[#1ec6000b] text-white dark:text-black border border-[#1fc60068] focus:outline-none focus:ring-2 focus:ring-[#1fc60068]"
                      required
                    />
                  </div>
                  <div className="mb-4 w-full md:w-[48%]">
                    <label
                      htmlFor="unlockDate"
                      className="block text-white dark:text-black font-bold mb-2"
                    >
                      TGE Percent
                    </label>
                    <input
                      type="number"
                      name="number"
                      placeholder="Ex:10"
                      className="w-full px-3 py-2 bg-[#1ec6000b]  border border-[#1fc60068] focus:outline-none focus:ring-2 focus:ring-[#1fc60068]"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row  justify-between items-center mt-5">
                  <div className="mb-4 w-full md:w-[48%]">
                    <label
                      htmlFor="unlockDate"
                      className="block text-white dark:text-black font-bold mb-2"
                    >
                      Cycle (days)
                    </label>
                    <input
                      type="number"
                      name="number"
                      placeholder="Ex:10"
                      className="w-full px-3 py-2 bg-[#1ec6000b] text-white dark:text-black border border-[#1fc60068] focus:outline-none focus:ring-2 focus:ring-[#1fc60068]"
                      required
                    />
                  </div>
                  <div className="mb-4 w-full md:w-[48%]">
                    <label
                      htmlFor="unlockDate"
                      className="block text-white dark:text-black font-bold mb-2"
                    >
                      Cycle release percent
                    </label>
                    <input
                      type="number"
                      name="number"
                      placeholder="Ex:10"
                      className="w-full px-3 py-2 bg-[#1ec6000b] text-white dark:text-black border border-[#1fc60068] focus:outline-none focus:ring-2 focus:ring-[#1fc60068]"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center mt-5">
              <button
                type="submit"
                className="text-md font-semibold font-quicksand border border-[#1fc600] p-2 px-3 lg:px-5 rounded bg-gradient-to-r from-[#000000] via-[#1fc600] to-[#000000] hover:from-[#000000] hover:via-[#22dd01] hover:to-[#000000] dark:bg-gradient-to-r dark:from-[#1fc600] dark:via-[#ffffff] dark:to-[#1fc600]"
              >
                Approve
              </button>
            </div>
          </form>
        </div>
      </div>
      <BottomSections />
    </>
  );
};

export default PinklockCreate2;
