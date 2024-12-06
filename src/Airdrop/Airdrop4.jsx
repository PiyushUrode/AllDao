import { useState } from "react";
import AllAirdrops from "./Airdrop4_all.jsx";
import MyAirdrops from "./Airdrop4_Myairdrop.jsx";
import CreatedByYou from "./Airdrop4_created.jsx";
import BottomSections from "../components/BottomSections.jsx";

const Airdrop4 = () => {
  const [activeTab, setActiveTab] = useState("all"); // Manage active tab state

  // Render content based on active tab
  const renderContent = () => {
    if (activeTab === "all") {
      return <AllAirdrops />;
    } else if (activeTab === "myAirdrop") {
      return <MyAirdrops />;
    } else if (activeTab === "createdByYou") {
      return <CreatedByYou />;
    }
  };

  return (
   <>
    <div className="min-h-screen p-1 sm:px-10 md:px-16 lg:px-20 xl:px-28 mt-10 md:mt-5 bg-black dark:bg-white">
      {/* Title */}
      <div className="p-6 border-2 border-green-500"> 
      <div className="bg-black dark:bg-white text-white dark:text-black rounded-lg border border-[#1fc6006b]">
       <div className="text-center mx-5 mb-8 border-b-2 border-dashed border-[#1fc600a8]">
        <h1 className="lg:text-3xl py-5 font-k2d text-xl font-bold">Air Drop</h1>
      </div>

      {/* Statistics */}
      <div className="flex justify-around mb-8 mx-5 border-b-2 border-[#1fc600a8] border-dashed">
        <div className="flex flex-col md:flex-row gap-5 text-center ">
          <h2 className="md:text-xl text-md font-quicksand md:font-semibold">Air Drop Launch</h2>
          <p className="md:text-xl text-md text-[#1fc600] font-bold">334</p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 text-center ">
          <h2 className="md:text-xl text-md md:font-semibold">Participate in All Time</h2>
          <p className="md:text-xl text-md text-[#1fc600] font-bold">17,000</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-around mb-8  p-4 rounded-lg">
        <button
          onClick={() => setActiveTab("all")}
          className={`py-2 px-4 rounded-lg ${
            activeTab === "all" ? " text-[#1fc600] underline font-bold" : "text-lg"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab("myAirdrop")}
          className={`py-2 px-4 rounded-lg ${
            activeTab === "myAirdrop" ? " text-[#1fc600] underline font-bold" : "text-lg"
          }`}
        >
          My Airdrop
        </button>
        <button
          onClick={() => setActiveTab("createdByYou")}
          className={`py-2 px-4 rounded-lg ${
            activeTab === "createdByYou" ? " text-[#1fc600] underline font-bold" : "text-lg"
          }`}
        >
          Created by You
        </button>
      </div>
      </div>

      {/* Dynamic Content */}
      <div className=" rounded-lg bg-black dark:bg-white ">{renderContent()}</div>
    </div>
    </div>
    <BottomSections />
   </>
  );
};

export default Airdrop4;
